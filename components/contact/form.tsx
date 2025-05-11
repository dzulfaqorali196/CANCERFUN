"use client";

import * as yup from "yup";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { sendContactEmail } from "@/app/actions/contact";
import { contactSchema } from "@/components/contact/yup-schema";
import { ReCaptcha } from "@/components/contact/recaptcha";

type ContactFormData = yup.InferType<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({
    type: null,
    message: null,
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setFormStatus({ type: null, message: null });

    try {
      const result = await sendContactEmail(data);
      if (result.success) {
        setFormStatus({
          type: "success",
          message:
            "Your message has been sent successfully! We'll get back to you soon.",
        });
        reset();
      } else {
        setFormStatus({
          type: "error",
          message:
            result.error || "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.log(error);
      setFormStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {formStatus.type && (
        <Alert
          variant={formStatus.type === "error" ? "destructive" : "default"}
          className={
            formStatus.type === "success"
              ? "bg-green-500/20 text-green-600 border-green-500/50"
              : ""
          }
        >
          {formStatus.type === "success" ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
          <AlertDescription>{formStatus.message}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="name" className={errors.name ? "text-destructive" : ""}>
          Name
        </Label>
        <Input
          id="name"
          {...register("name")}
          className={errors.name ? "border-destructive" : ""}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="email"
          className={errors.email ? "text-destructive" : ""}
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className={errors.email ? "border-destructive" : ""}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="subject"
          className={errors.subject ? "text-destructive" : ""}
        >
          Subject
        </Label>
        <Input
          id="subject"
          {...register("subject")}
          className={errors.subject ? "border-destructive" : ""}
          placeholder="What is this regarding?"
        />
        {errors.subject && (
          <p className="text-sm text-destructive">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="message"
          className={errors.message ? "text-destructive" : ""}
        >
          Message
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          className={`min-h-[120px] resize-y ${
            errors.message ? "border-destructive" : ""
          }`}
          placeholder="Your message here..."
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>
      <div className="flex items-start justify-between gap-4">
        <ReCaptcha
          setValue={setValue}
          errors={errors}
          reset={() => reset({ recaptchaToken: "" })}
        />
        <Button
          type="submit"
          className="w-full bg-web3-primary hover:bg-web3-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </form>
  );
}
