"use client";

import {
  useGetJobDetailsQuery,
  useGetUserJobApplicationQuery,
} from "@/hasura/generated/graphql";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { siteAdmins } from "@/constants/admins";
import { Separator } from "@/components/ui/separator";

interface Props {
  id: string;
}

export default function JobDetail({ id }: Props) {
  const { data: session } = useSession();
  const userId = session?.user?.id ?? "";
  const isSiteAdmin = siteAdmins.includes(userId);
  const {
    data: jobData,
    loading: jobLoading,
    error: jobError,
  } = useGetJobDetailsQuery({
    variables: { id },
  });
  const {
    data: applicationData,
    loading: applicationLoading,
    error: applicationError,
  } = useGetUserJobApplicationQuery({
    variables: { job_id: id, user_id: userId || "" },
    skip: !userId,
  });

  if (jobLoading || applicationLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (jobError || applicationError) {
    return (
      <div className="text-center text-red-500 py-8">
        <p>Error: {(jobError || applicationError)?.message}</p>
      </div>
    );
  }

  const job = jobData?.jobs_by_pk;
  if (!job) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p>Job not found.</p>
      </div>
    );
  }

  const hasApplied = !!applicationData?.job_applications?.length;
  const applicationStatus =
    applicationData?.job_applications[0]?.status || "Not Applied";

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-gray-100">
              {job.title}
            </CardTitle>
            {/* <p className="text-muted-foreground">
              {job.location} • {job.salary}
            </p> */}
          </div>
          {userId && (
            <div>
              <h3 className="text-sm font-semibold text-cyan-300">
                Application Status
              </h3>
              <Badge
                variant={hasApplied ? "default" : "secondary"}
                className="mt-2"
              >
                {applicationStatus}
              </Badge>
            </div>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-cyan-300">Description</h3>
            <p className="text-gray-200">{job.description}</p>
          </div>

          {isSiteAdmin && (
            <>
              <Separator />
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-cyan-300">
                  Location
                </h3>
                <p className="text-gray-200">{job.location}</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-cyan-300">Salary</h3>
                <p className="text-gray-200">{job.salary}</p>
              </div>
              <Separator />
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-cyan-300">
                  Created At
                </h3>
                <p className="text-gray-200">
                  {new Date(job.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-cyan-300">
                  Updated At
                </h3>
                <p className="text-gray-200">
                  {new Date(job.updated_at).toLocaleDateString()}
                </p>
              </div>
            </>
          )}

          <Button className="w-full md:w-auto">
            <Link href={`/jobs/${job.id}/apply`}>
              {hasApplied ? "Edit Application" : "Apply Now"}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
