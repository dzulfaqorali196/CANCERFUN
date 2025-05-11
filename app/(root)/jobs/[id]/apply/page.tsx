import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { ApplyForm } from "@/components/job/apply";
import { Routes } from "@/constants/routes";

interface ApplyPageProps {
  params: Promise<{ id: string }>;
}

export default async function ApplyPage({ params }: ApplyPageProps) {
  const session = await auth();
  const { id: jobId } = await params;

  if (!session?.user?.id) {
    redirect(Routes.SIGNIN);
  }

  const jobTitle = "Job Application";

  return (
    <div className="min-h-screen mt-32">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Apply for {jobTitle}</h1>
        </div>
        <ApplyForm jobId={jobId} />
      </div>
    </div>
  );
}
