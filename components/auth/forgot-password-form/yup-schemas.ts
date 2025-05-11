import * as yup from "yup";

export const emailSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export const otpSchema = yup.object({
  otp: yup
    .string()
    .length(6, "OTP must be 6 digits")
    .required("OTP is required"),
});

export const newPasswordSchema = yup.object({
  newPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("New password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});
