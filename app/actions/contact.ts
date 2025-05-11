"use server";

import nodemailer from "nodemailer";
import * as yup from "yup";
const contactSchema = yup.object({
  name: yup.string().required().min(2),
  email: yup.string().required().email(),
  subject: yup.string().required().min(5),
  message: yup.string().required().min(10),
  recaptchaToken: yup.string().required(),
});

type ContactFormData = yup.InferType<typeof contactSchema>;
async function verifyRecaptcha(token: string) {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey || secretKey === "test_key") {
      console.log("reCAPTCHA verification skipped in development mode");
      return true;
    }

    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    await contactSchema.validate(formData);

    const isRecaptchaValid = await verifyRecaptcha(formData.recaptchaToken);
    if (!isRecaptchaValid) {
      return {
        success: false,
        error: "reCAPTCHA verification failed. Please try again.",
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || "smtp.example.com",
      port: Number.parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || "contact@web3project.com",
      to: process.env.EMAIL_TO || "info@web3project.com",
      replyTo: formData.email,
      subject: `Contact Form: ${formData.subject}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        
        Message:
        ${formData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6E56CF;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <div style="margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
              ${formData.message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
      `,
    };

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.log("Email would be sent with:", mailOptions);
      return { success: true };
    }

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("Error sending contact email:", error);

    if (error instanceof yup.ValidationError) {
      return {
        success: false,
        error: `Validation error: ${error.message}`,
      };
    }

    return {
      success: false,
      error: "Failed to send your message. Please try again later.",
    };
  }
}
