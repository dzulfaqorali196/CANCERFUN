"use client";

import { useGetJobsQuery } from "@/hasura/generated/graphql";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function JobsList() {
  const { data, loading, error } = useGetJobsQuery({
    variables: {
      limit: 10,
      offset: 0,
    },
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  const jobs = data?.jobs || [];

  if (jobs.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p>No jobs found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card key={job.id} className="bg-web3-gray">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold ">{job.title}</h3>
            <p className="text-muted-foreground">
              {job.location} • {job.salary || "Not specified"}
            </p>
            <p className="text-gray-600 mt-2">
              {job.description?.slice(0, 100) || "No description"}...
            </p>
            <Link href={`/jobs/${job.id}`}>
              <Button variant="outline" className="mt-4">
                View Details
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
