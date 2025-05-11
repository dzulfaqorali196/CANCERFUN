import JobsList from "@/components/jobs";
import SectionHeader from "@/components/section-header";

export default function JobsPage() {
  return (
    <>
      <div className="min-h-screen pt-40 pb-20">
        <div className="container">
          <SectionHeader
            title1="Jobs"
            title2="Opportunity"
            description="Explore guides, tutorials, and resources to build, research, and
                engage with our decentralized biotech platform."
          />
          <JobsList />
        </div>
      </div>

      {/* <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Job Listings
                </CardTitle>
                <p className="text-muted-foreground">
                  Explore exciting career opportunities with us.
                </p>
              </div>
              <Link href="/jobs/create">
                <Button>Create Job</Button>
              </Link>
            </div>
          </CardHeader>
        </Card>        
        <Card>
          <CardContent className="pt-6">
            <JobsList />
          </CardContent>
        </Card>
      </div>
    </div> */}
    </>
  );
}
