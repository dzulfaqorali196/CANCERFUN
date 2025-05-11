"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  useDeleteJobMutation,
  GetJobsDocument,
} from "@/hasura/generated/graphql";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useSession } from "next-auth/react";
import { siteAdmins } from "@/constants/admins";

interface JobActionsProps {
  jobId: string;
}

export function JobActions({ jobId }: JobActionsProps) {
  const { data: session } = useSession();
  const [deleteJob, { loading }] = useDeleteJobMutation();
  const router = useRouter();

  const userId = session?.user?.id ?? "";
  const isSiteAdmin = siteAdmins.includes(userId);

  if (!isSiteAdmin) {
    return null;
  }

  const handleDelete = async () => {
    try {
      await deleteJob({
        variables: { id: jobId },
        update: (cache) => {
          const existingJobs = cache.readQuery<{ jobs: Array<{ id: string }> }>(
            {
              query: GetJobsDocument,
              variables: { limit: 10, offset: 0 },
            }
          );
          if (existingJobs?.jobs) {
            const updatedJobs = existingJobs.jobs.filter(
              (job) => job.id !== jobId
            );
            cache.writeQuery({
              query: GetJobsDocument,
              variables: { limit: 10, offset: 0 },
              data: {
                jobs: updatedJobs,
              },
            });
          }
        },
      });
      toast.success("Job deleted successfully!", {
        description: "The job has been removed from the listings.",
      });
      router.push("/jobs");
    } catch (err) {
      console.error("Error deleting job:", err);
      toast.error("Failed to delete job", {
        description: err instanceof Error ? err.message : "Please try again.",
      });
    }
  };

  return (
    <div className="flex space-x-2">
      <Link href={`/jobs/${jobId}/edit`}>
        <Button variant="outline">Edit</Button>
      </Link>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" disabled={loading}>
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the job
              listing.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
