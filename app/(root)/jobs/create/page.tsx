import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JobCreateForm } from "@/components/job/create";

export default function JobCreatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/jobs">
            <Button variant="outline">← Back to Jobs</Button>
          </Link>
        </div>

        {/* Create Job Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900">
              Create New Job
            </CardTitle>
            <p className="text-muted-foreground">
              Fill out the details to add a new job listing.
            </p>
          </CardHeader>
          <CardContent>
            <JobCreateForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
