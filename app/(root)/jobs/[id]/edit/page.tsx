import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import JobEdit from "@/components/job/edit";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function JobEditPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="min-h-screen mt-32">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-6">
          <Link href={`/jobs/${id}`}>
            <Button variant="outline">← Back to Job</Button>
          </Link>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-100">
              Edit Job
            </CardTitle>
            <p className="text-muted-foreground">
              Update the details for this job listing.
            </p>
          </CardHeader>
          <CardContent>
            <JobEdit id={id} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
