import nodemailer from "nodemailer";

// Configure the transporter based on your email provider
const createTransporter = () => {
  const smtpConfig = {
    host: process.env.SMTP_HOST || "smtp.gmail.com", // Replace with your SMTP host
    port: parseInt(process.env.SMTP_PORT || "587"), // Common ports: 587 (TLS), 465 (SSL)
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // Your email or SMTP username
      pass: process.env.SMTP_PASSWORD, // Your email password or SMTP API key
    },
  };

  return nodemailer.createTransport(smtpConfig);
};

/**
 * Sends an email to the specified recipient.
 *
 * @param to - The recipient's email address.
 * @param subject - The subject of the email.
 * @param text - The plain-text content of the email.
 * @param html - Optional HTML content for the email.
 * @returns A promise that resolves when the email is sent successfully.
 */
export const sendEmail = async (
  to: string,
  subject: string,
  text: string,
  html?: string
): Promise<void> => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || "no-reply@example.com", // Sender email address
      to,
      subject,
      text,
      html,
    };

    // Send the email
    const result = await transporter.sendMail(mailOptions);

    // Log success
    console.log(`Email sent successfully to ${to}:`, result.messageId);
  } catch (error) {
    console.error("Error sending email:", error);

    // Optionally rethrow the error if you want to handle it elsewhere
    throw new Error("Failed to send email");
  }
};
