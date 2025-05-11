"use client";

import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";

import { useRef } from "react";
import { FieldErrors, UseFormSetValue } from "react-hook-form";
import { contactSchema } from "@/components/contact/yup-schema";
import "./style.css";

type ContactFormData = yup.InferType<typeof contactSchema>;

interface ReCaptchaProps {
  setValue: UseFormSetValue<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
  reset: () => void;
}

export function ReCaptcha({ setValue, errors, reset }: ReCaptchaProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleRecaptchaChange = (token: string | null) => {
    setValue("recaptchaToken", token || "", { shouldValidate: true });
  };

  return (
    <div className="space-y-2">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
          "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        }
        onChange={handleRecaptchaChange}
        theme="dark"
        size="compact"
        className="captcha"
        aria-label="reCAPTCHA verification"
        onExpired={() => {
          reset();
          recaptchaRef.current?.reset();
        }}
      />
      {errors.recaptchaToken && (
        <p className="text-sm text-destructive">
          {errors.recaptchaToken.message}
        </p>
      )}
      <input type="hidden" name="recaptchaToken" />
    </div>
  );
}
