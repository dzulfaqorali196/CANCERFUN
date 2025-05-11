"use client";

import { useUpdateJobMutation } from "@/hasura/generated/graphql";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface JobUpdateFormProps {
  job: {
    id: string;
    title: string;
    description?: string | null;
    location: string;
    salary?: number | null;
  };
}

export function JobUpdateForm({ job }: JobUpdateFormProps) {
  const [formData, setFormData] = useState({
    title: job.title,
    description: job.description ?? "",
    location: job.location,
    salary: job.salary ?? 0,
  });
  const [updateJob, { loading, error }] = useUpdateJobMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateJob({
        variables: {
          id: job.id,
          input: {
            title: formData.title,
            description: formData.description,
            location: formData.location,
            salary: formData.salary || null,
          },
        },
      });
      toast.success("Job updated successfully!", {
        description: "Your changes have been saved.",
      });
    } catch (err) {
      console.error("Error updating job:", err);
      toast.error("Failed to update job", {
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
          type="text" // Changed to text to handle currency or ranges
          value={formData.salary}
          onChange={handleChange}
          placeholder="Enter salary (e.g., $50,000)"
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-sm text-red-500">
          Error: {error.message || "An error occurred while updating the job."}
        </p>
      )}

      {/* Submit Button */}
      <Button type="submit" disabled={loading} className="w-full md:w-auto">
        {loading ? "Updating..." : "Update Job"}
      </Button>
    </form>
  );
}
