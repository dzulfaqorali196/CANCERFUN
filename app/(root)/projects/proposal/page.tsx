"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SectionHeader from "@/components/section-header";

// Define the form schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  projectTitle: yup.string().required("Project title is required"),
  abstract: yup
    .string()
    .min(50, "Abstract must be at least 50 characters")
    .max(500, "Abstract cannot exceed 500 characters")
    .required("Abstract is required"),
  budget: yup
    .number()
    .typeError("Budget must be a number")
    .min(1, "Budget must be greater than 0")
    .required("Budget is required"),
  file: yup
    .mixed<FileList>()
    .test("fileSize", "File size must not exceed 5MB", (value) => {
      if (!value || !value[0]) return true; // No file selected
      return value[0].size <= 5 * 1024 * 1024; // 5MB limit
    })
    .test("fileType", "Only PDF or DOCX files are allowed", (value) => {
      if (!value || !value[0]) return true; // No file selected
      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      return allowedTypes.includes(value[0].type);
    })
    .required("A supporting document is required"),
});

interface FormData {
  name: string;
  email: string;
  projectTitle: string;
  abstract: string;
  budget: number;
  file: FileList;
}

export default function ProposalSubmission() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", data.name);
      formDataToSend.append("email", data.email);
      formDataToSend.append("projectTitle", data.projectTitle);
      formDataToSend.append("abstract", data.abstract);
      formDataToSend.append("budget", String(data.budget));
      formDataToSend.append("file", data.file[0]);

      const response = await fetch("/api/submit-proposal", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setMessage("Your proposal has been submitted successfully!");
        reset();
      } else {
        setMessage(
          "There was an error submitting your proposal. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting proposal:", error);
      setMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="container">
        <SectionHeader
          title1="Submit Your Research"
          title2="Proposal"
          description="Apply for funding to accelerate your cancer research project."
        />

        {/* Form Section */}
        <section className="max-w-3xl mx-auto p-8 rounded-lg shadow-lg border">
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Project Title Field */}
            <div className="mb-4">
              <label
                htmlFor="projectTitle"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Project Title
              </label>
              <input
                type="text"
                id="projectTitle"
                {...register("projectTitle")}
                className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              />
              {errors.projectTitle && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.projectTitle.message}
                </p>
              )}
            </div>

            {/* Abstract Field */}
            <div className="mb-4">
              <label
                htmlFor="abstract"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Project Abstract (Max 500 words)
              </label>
              <textarea
                id="abstract"
                {...register("abstract")}
                rows={6}
                className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              ></textarea>
              {errors.abstract && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.abstract.message}
                </p>
              )}
            </div>

            {/* Budget Field */}
            <div className="mb-4">
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Estimated Budget (in USD)
              </label>
              <input
                type="number"
                id="budget"
                {...register("budget", { valueAsNumber: true })}
                className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              />
              {errors.budget && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.budget.message}
                </p>
              )}
            </div>

            {/* File Upload Field */}
            <div className="mb-4">
              <label
                htmlFor="file"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Upload Supporting Document (PDF or DOCX, Max 5MB)
              </label>
              <input
                type="file"
                id="file"
                accept=".pdf,.doc,.docx"
                {...register("file")}
                className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              />
              {errors.file && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.file.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Proposal"}
              </button>
            </div>

            {/* Success/Error Message */}
            {message && (
              <p
                className={`mt-4 text-center ${
                  message.includes("success")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
