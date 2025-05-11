"use client";

import { useGetJobDetailsQuery } from "@/hasura/generated/graphql";
import { JobUpdateForm } from "@/components/job/update";

interface Props {
  id: string;
}

export default function JobEdit({ id }: Props) {
  const { data, loading, error } = useGetJobDetailsQuery({
    variables: { id },
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8 min-h-screen bg-gray-50">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  const job = data?.jobs_by_pk;
  if (!job) {
    return (
      <div className="text-center text-gray-500 py-8 min-h-screen bg-gray-50">
        <p>Job not found.</p>
      </div>
    );
  }

  return <JobUpdateForm job={job} />;
}
