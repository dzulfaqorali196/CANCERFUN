"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  useCreateJobApplicationMutation,
  useUpdateJobApplicationMutation,
  useGetUserJobApplicationQuery,
  GetJobDetailsDocument,
} from "@/hasura/generated/graphql";
import { useRouter } from "next/navigation";
import { request } from "graphql-request";
import TabExperience from "@/components/job/apply/tab-experience";
import TabEducation from "@/components/job/apply/tab-education";
import TabPersonal from "@/components/job/apply/tab-personal";
import {
  ApplyFormData,
  ApplyFormProps,
  Education,
  Experience,
} from "@/components/job/apply/types";
import Link from "next/link";
import { FaArrowLeftLong, FaRotate } from "react-icons/fa6";
import { Routes } from "@/constants/routes";

const HASURA_URL =
  process.env.HASURA_GRAPHQL_ENDPOINT ||
  "https://your-hasura-app.hasura.app/v1/graphql";
const HASURA_ADMIN_SECRET = process.env.HASURA_SECRET;

const GET_USER_BY_EMAIL = `
  query GetUserByEmail($email: String!) {
    users(where: { email: { _eq: $email } }) {
      id
      name
      email
    }
  }
`;

const INSERT_USER = `
  mutation InsertUser($id: uuid!, $name: String!, $email: String!) {
    insert_users_one(object: { id: $id, name: $name, email: $email }) {
      id
      name
      email
    }
  }
`;

export function ApplyForm({ jobId }: ApplyFormProps) {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const [formData, setFormData] = useState<ApplyFormData>({
    personal_info: {
      name: user?.name || "",
      email: user?.email || "",
      country: user?.country || "",
      preferred_contact: user?.preferred_contact || "email",
      twitter: user?.twitter || "",
      linkedin: user?.linkedin || "",
      telegram: user?.telegram || "",
      discord: user?.discord || "",
      affiliation: user?.affiliation || "",
      title: user?.title || "",
    },
    educations: [] as Education[],
    experiences: [] as Experience[],
    cover_letter: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobTitle, setJobTitle] = useState("");
  const [
    createApplication,
    {
      loading: createLoading,
      // error: createError
    },
  ] = useCreateJobApplicationMutation();
  const [
    updateApplication,
    {
      loading: updateLoading,
      //  error: updateError
    },
  ] = useUpdateJobApplicationMutation();

  const { data: applicationData, loading: applicationLoading } =
    useGetUserJobApplicationQuery({
      variables: { job_id: jobId, user_id: user?.id || "" },
      skip: !user?.id,
    });

  const hasApplied = !!applicationData?.job_applications?.length;
  const existingApplication = applicationData?.job_applications[0];

  useEffect(() => {
    if (existingApplication?.extra_info) {
      setFormData({
        personal_info: existingApplication.extra_info.personal_info || {
          name: user?.name || "",
          email: user?.email || "",
        },
        educations: existingApplication.extra_info.educations || [],
        experiences: existingApplication.extra_info.experiences || [],
        cover_letter: existingApplication.extra_info.cover_letter || "",
      });
      setJobTitle(existingApplication.job.title);
    }
  }, [existingApplication, user]);

  const checkOrCreateUser = async () => {
    if (!user?.id || !user.email) {
      throw new Error("User not authenticated");
    }

    const headers: Record<string, string> = {};
    if (HASURA_ADMIN_SECRET) {
      headers["x-hasura-admin-secret"] = HASURA_ADMIN_SECRET;
    }

    const userResponse = await request<{
      users: { id: string; name: string; email: string }[];
    }>(HASURA_URL, GET_USER_BY_EMAIL, { email: user.email }, headers);

    if (userResponse.users.length > 0) {
      return userResponse.users[0];
    }

    const newUser = await request<{
      insert_users_one: { id: string; name: string; email: string };
    }>(
      HASURA_URL,
      INSERT_USER,
      {
        id: user.id,
        name: user.name || user.email.split("@")[0],
        email: user.email,
      },
      headers
    );

    return newUser.insert_users_one;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.id) {
      toast.error("Please log in to apply for this job.");
      router.push(Routes.SIGNIN);
      return;
    }

    try {
      await checkOrCreateUser();
      let resume_url: string | null = existingApplication?.resume_url || null;
      if (resumeFile) {
        const formData = new FormData();
        formData.append("file", resumeFile);
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        if (!response.ok) throw new Error("Failed to upload resume");
        const { url } = await response.json();
        resume_url = url;
      }

      const applicationInput = {
        job_id: jobId,
        user_id: user.id,
        status: existingApplication?.status || "Pending",
        resume_url,
        extra_info: {
          personal_info: formData.personal_info,
          educations: formData.educations,
          experiences: formData.experiences,
          cover_letter: formData.cover_letter || null,
        },
      };

      if (hasApplied && existingApplication?.id) {
        await updateApplication({
          variables: {
            id: existingApplication.id,
            input: {
              resume_url,
              extra_info: applicationInput.extra_info,
            },
          },
        });
        toast.success("Application updated successfully!", {
          description: `Your application for ${jobTitle} has been updated.`,
        });
      } else {
        await createApplication({
          variables: {
            input: applicationInput,
          },
          update: (cache, { data }) => {
            const newApplication = data?.insert_job_applications_one;
            if (!newApplication) return;

            const jobData = cache.readQuery<{
              jobs_by_pk: {
                job_applications_aggregate: {
                  aggregate: {
                    count: number;
                  };
                };
              };
            }>({
              query: GetJobDetailsDocument,
              variables: { id: jobId },
            });
            if (jobData?.jobs_by_pk) {
              cache.writeQuery({
                query: GetJobDetailsDocument,
                variables: { id: jobId },
                data: {
                  jobs_by_pk: {
                    ...jobData.jobs_by_pk,
                    job_applications_aggregate: {
                      ...jobData.jobs_by_pk.job_applications_aggregate,
                      aggregate: {
                        count:
                          (jobData.jobs_by_pk.job_applications_aggregate
                            .aggregate?.count || 0) + 1,
                      },
                    },
                  },
                },
              });
            }
          },
        });
        toast.success("Application submitted successfully!", {
          description: `Your application for ${jobTitle} has been received.`,
        });
      }

      setFormData({
        personal_info: {
          name: user?.name || "",
          email: user?.email || "",
          country: user?.country || "",
          preferred_contact: user?.preferred_contact || "email",
        },
        educations: [],
        experiences: [],
        cover_letter: "",
      });
      setResumeFile(null);
      router.push(`/jobs/${jobId}`);
    } catch (err) {
      console.error("Error submitting application:", err);
      toast.error("Failed to submit application", {
        description: err instanceof Error ? err.message : "Please try again.",
      });
    }
  };

  if (applicationLoading) {
    return <div>Loading application data...</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        {hasApplied ? "Edit Application" : "Apply"} for {jobTitle}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-3 gap-2 rounded-lg p-2 h-16 bg-border-spin">
            <TabsTrigger
              value="personal"
              className="dark:data-[state=active]:bg-indigo-800"
            >
              Personal Info
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="dark:data-[state=active]:bg-indigo-800"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="dark:data-[state=active]:bg-indigo-800"
            >
              Job Experience
            </TabsTrigger>
          </TabsList>
          <div className="mt-6">
            <TabPersonal
              setFormData={setFormData}
              formData={formData}
              setResumeFile={setResumeFile}
              existingApplication={existingApplication}
              applicationLoading={applicationLoading}
            />
            <TabEducation
              formData={formData}
              setFormData={setFormData}
              applicationLoading={applicationLoading}
            />
            <TabExperience
              formData={formData}
              setFormData={setFormData}
              applicationLoading={applicationLoading}
            />
          </div>
        </Tabs>
        <div className="flex flex-row justify-between">
          <Link href={`/jobs/${jobId}`}>
            <Button variant="outline" className="flex flex-row gap-2">
              <FaArrowLeftLong />
              Back to Job
            </Button>
          </Link>
          <Button
            type="submit"
            className="flex flex-row gap-2"
            disabled={
              createLoading || updateLoading || applicationLoading || !user?.id
            }
          >
            <FaRotate />
            {createLoading || updateLoading
              ? "Submitting..."
              : hasApplied
              ? "Update Application"
              : "Submit Application"}
          </Button>
        </div>
      </form>
    </div>
  );
}
