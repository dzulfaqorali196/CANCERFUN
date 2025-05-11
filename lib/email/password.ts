import { sendEmail } from "@/lib/email";

/**
 * Sends a password reset email with an OTP.
 *
 * @param email - The recipient's email address.
 * @param otp - The one-time password (OTP) to include in the email.
 */
export const sendPasswordResetEmail = async (email: string, otp: string) => {
  const subject = "Your Password Reset OTP";
  const text = `Your OTP is: ${otp}. It will expire in 5 minutes.`;
  const html = `
    <p>Your OTP is: <strong>${otp}</strong>.</p>
    <p>Please use this code to reset your password. It will expire in 5 minutes.</p>
    <p>If you did not request this, please ignore this email.</p>
  `;

  await sendEmail(email, subject, text, html);
};

/**
 * Sends a notification email when a user's password has been changed.
 *
 * @param email - The recipient's email address.
 */
export const sendPasswordChangedEmail = async (email: string) => {
  const subject = "Your Password Has Been Changed";
  const text = "Your password has been successfully changed.";
  const html = `
    <p>Your password has been successfully changed.</p>
    <p>If you did not make this change, please contact support immediately.</p>
  `;

  await sendEmail(email, subject, text, html);
};
