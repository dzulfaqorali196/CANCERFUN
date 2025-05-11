import BlogPosts from "@/components/blog/posts";
import SectionHeader from "@/components/section-header";
import { getPosts } from "@/lib/md/article";
import { ArticleType } from "@/types";

export default async function BlogPage() {
  const posts = await getPosts(ArticleType.WHY);
  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="container">
        <SectionHeader
          title1="Our"
          title2="Blog"
          description="Explore our latest blog posts and stay updated on the latest news and insights from our team."
        />
        <BlogPosts posts={posts} />
      </div>
    </div>
  );
}
