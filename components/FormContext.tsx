"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface FormData {
  // Page 1: Personal Information
  fullName: string;
  email: string;
  preferredContact: string;
  country: string;
  affiliation?: string | undefined;
  title?: string | undefined;
  // Page 2: Background & Expertise
  currentRole: string;
  educationalBackground: string;
  expertise: string;
  cancerResearch: "yes" | "no";
  publications: string;
  previousExperience?: string | undefined;
  // Page 3: Motivation & Alignment
  motivation: string;
  perspectives: string;
  decentralization: string;
  // Page 4: Involvement & Availability
  hoursPerMonth: number;
  contributions: string[];
  conflictOfInterest: "yes" | "no";
  // Page 5: Optional
  additionalInfo?: string | undefined;
  cvLink?: string | undefined;
}

interface FormContextType {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  resetFormData: () => void;
}

const defaultFormData: FormData = {
  fullName: "",
  email: "",
  preferredContact: "",
  country: "",
  affiliation: "",
  title: "",
  currentRole: "",
  educationalBackground: "",
  expertise: "",
  cancerResearch: "no",
  publications: "",
  previousExperience: "",
  motivation: "",
  perspectives: "",
  decentralization: "",
  hoursPerMonth: 0,
  contributions: [],
  conflictOfInterest: "no",
  additionalInfo: "",
  cvLink: "",
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetFormData = () => {
    setFormData(defaultFormData);
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}
