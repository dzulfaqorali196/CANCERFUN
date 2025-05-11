import * as yup from "yup";

export const schema = yup
  .object({
    // Page 1: Personal Information
    fullName: yup
      .string()
      .required("Full name is required")
      .min(2, "Name must be at least 2 characters"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    preferredContact: yup
      .string()
      .required("Preferred contact method is required"),
    country: yup.string().required("Country is required"),
    // affiliation: yup.string().optional().default(""),
    // title: yup.string().optional().default(""),
    // Page 2: Background & Expertise
    currentRole: yup.string().required("Current role is required"),
    educationalBackground: yup
      .string()
      .required("Educational background is required"),
    expertise: yup.string().required("Field(s) of expertise is required"),
    cancerResearch: yup
      .string()
      .oneOf(["yes", "no"], "Please select an option")
      .required("This field is required"),
    publications: yup
      .string()
      .url("Must be a valid URL")
      .required("At least one link is required"),
    // previousExperience: yup.string().optional(),
    // Page 3: Motivation & Alignment
    motivation: yup
      .string()
      .required("Motivation is required")
      .max(250, "Must be 250 words or less")
      .test(
        "wordCount",
        "Must be 250 words or less",
        (value) => !value || value.split(/\s+/).filter(Boolean).length <= 250
      ),
    perspectives: yup.string().required("Perspectives are required"),
    decentralization: yup
      .string()
      .required("Decentralization view is required"),
    // Page 4: Involvement & Availability
    hoursPerMonth: yup
      .number()
      .required("Hours per month is required")
      .min(1, "Must commit at least 1 hour"),
    contributions: yup
      .array()
      .of(yup.string())
      .min(1, "Select at least one contribution")
      .required("Contributions are required"),
    conflictOfInterest: yup
      .string()
      .oneOf(["yes", "no"], "Please select an option")
      .required("This field is required"),
    // Page 5: Optional
    additionalInfo: yup.string().optional().default(""),
    cvLink: yup.string().url("Must be a valid URL").optional(),
  })
  .required();
