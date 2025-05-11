import { ArticleDoc, ArticleType } from "@/types";
import { getMdContent, getPosts } from "@/lib/md/article";

import "highlight.js/styles/github-dark.css";
import "@/styles/blog.css";
import PostDetails from "@/components/blog/details";
import PostHeader from "@/components/blog/header";
import PostRelated from "@/components/blog/related";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post: ArticleDoc = await getMdContent(slug, ArticleType.WHY);
  const posts = await getPosts(ArticleType.WHY);
  const relatedPosts = posts.filter((p) => p.id !== post.id).slice(0, 2);

  if (post.id === "null") {
    return (
      <div className="min-h-screen pt-40 pb-20">
        <div className="container">
          <div className="mx-auto max-w-3xl mt-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-lg text-gray-300">
              Sorry, the blog post you are looking for does not exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      <PostHeader post={post} />
      <PostDetails post={post} />
      <PostRelated posts={relatedPosts} />
    </div>
  );
}
