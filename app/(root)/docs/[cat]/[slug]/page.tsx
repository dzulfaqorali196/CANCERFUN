import Link from "next/link";
import SideNav from "@/components/docs/sidenav";
import DocContent from "@/components/docs/content";
import { getMdContent } from "@/lib/md/article";
import { ArticleDoc, ArticleType } from "@/types";
import "@/styles/blog.css";
import { Routes } from "@/constants/routes";
import { Button } from "@/components/ui/button";

interface DocsPageProps {
  params: Promise<{
    cat: string;
    slug: string;
  }>;
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { cat, slug } = await params;
  const doc_slug = `${cat}/${slug}`;
  const post: ArticleDoc = await getMdContent(doc_slug, ArticleType.DOC);
  const { id } = post;

  if (id === "null") {
    return (
      <div className="min-h-screen bg-web3-dark flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl text-white mb-4">404 - Page not found</div>
          <div className="flex justify-center gap-4">
            <Link href={Routes.HOME} passHref>
              <Button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Home
              </Button>
            </Link>
            <Link href={Routes.DOCUMENTATION} passHref>
              <Button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Documentation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-web3-dark">
      <div className="container py-20 md:py-32">
        <div className="flex flex-col lg:flex-row gap-8">
          <SideNav cat={cat} slug={slug} />
          <DocContent cat={cat} slug={slug} post={post} />
        </div>
      </div>
    </div>
  );
}
