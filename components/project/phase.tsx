import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { IProjectPhaseCurrationStatus, Phase } from "@/types";

export default function ProjectPhase({ phases }: { phases?: Phase[] }) {
  if (!phases) {
    return null;
  }
  return (
    <section className="max-w-5xl mx-auto mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {phases.map((phase, index) => (
          <div key={index}>
            <Card className="h-full bg-web3-darker bg-border-spin border border-transparent animate-border gap-4">
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <div className="h-8 w-8 flex items-center justify-center rounded-full border bg-sky-100 text-black">
                    {phase.step}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium px-2 py-1 rounded-full",
                      phase.status === IProjectPhaseCurrationStatus.LIVE
                        ? "bg-emerald-300 text-web3-dark"
                        : "bg-amber-100"
                    )}
                  >
                    {phase.name}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-md font-bold mb-2">Currating</div>
                <div className="text-xs text-muted-foreground">
                  This reflects whether the project is currently being evaluated
                  by the community for support.
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
