import { getMdProjectContent } from "@/lib/md/project";
import { IProject } from "@/types";

import "@/styles/blog.css";

import ProjectHeader from "@/components/project/header";
import ProjectPhase from "@/components/project/phase";
import ProjectFooter from "@/components/project/footer";
import { Separator } from "@/components/ui/separator";
import Article from "@/components/project/article";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post: IProject = await getMdProjectContent(slug);

  return (
    <div className="min-h-screen text-white pt-40 pb-20 px-4 sm:px-6 lg:px-8">
      <ProjectHeader post={post} />
      <Separator className="max-w-5xl mx-auto my-12" />
      <ProjectPhase phases={post.phases} />
      <Separator className="max-w-5xl mx-auto my-12" />
      <Article contentHtml={post.contentHtml} />
      <Separator className="max-w-5xl mx-auto my-12" />
      <ProjectFooter post={post} />
    </div>
  );
}
