"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  useCreateJobMutation,
  GetJobsDocument,
} from "@/hasura/generated/graphql";
import { useRouter } from "next/navigation";

export function JobCreateForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    salary: 0, // String for consistency with schema
  });
  const [createJob, { loading, error }] = useCreateJobMutation();
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createJob({
        variables: {
          input: {
            title: formData.title,
            description: formData.description || null,
            location: formData.location,
            salary: formData.salary || null,
          },
        },
        update: (cache, { data }) => {
          const newJob = data?.insert_jobs_one;
          if (!newJob) return;

          // Read existing jobs from cache
          const existingJobs = cache.readQuery<{ jobs: (typeof newJob)[] }>({
            query: GetJobsDocument,
            variables: { limit: 10, offset: 0 }, // Match JobsList variables
          });

          // Append new job to the beginning of the list
          cache.writeQuery({
            query: GetJobsDocument,
            variables: { limit: 10, offset: 0 },
            data: {
              jobs: [newJob, ...(existingJobs?.jobs || [])].slice(0, 10), // Respect limit
            },
          });
        },
      });
      toast.success("Job created successfully!", {
        description: "The new job has been added to the listings.",
      });
      setFormData({ title: "", description: "", location: "", salary: 0 }); // Reset form
      router.push("/jobs"); // Redirect to /jobs
    } catch (err) {
      console.error("Error creating job:", err);
      toast.error("Failed to create job", {
        description: err instanceof Error ? err.message : "Please try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title">Job Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter job title"
          required
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter job description"
          rows={5}
        />
      </div>

      {/* Location */}
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter job location"
          required
        />
      </div>

      {/* Salary */}
      <div className="space-y-2">
        <Label htmlFor="salary">Salary</Label>
        <Input
          id="salary"
          name="salary"
          type="text"
          value={formData.salary}
          onChange={handleChange}
          placeholder="Enter salary (e.g., $50,000)"
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-sm text-red-500">
          Error: {error.message || "An error occurred while creating the job."}
        </p>
      )}

      {/* Submit Button */}
      <Button type="submit" disabled={loading} className="w-full md:w-auto">
        {loading ? "Creating..." : "Create Job"}
      </Button>
    </form>
  );
}
