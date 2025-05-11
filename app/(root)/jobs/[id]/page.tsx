import JobDetail from "@/components/job";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JobActions } from "@/components/job/actions";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function JobDetailPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="min-h-screen mt-32">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-6">
          <Link href="/jobs">
            <Button variant="outline">← Back to Jobs</Button>
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold">Job Details</h3>
            <JobActions jobId={id} />
          </div>
          <div>
            <JobDetail id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
