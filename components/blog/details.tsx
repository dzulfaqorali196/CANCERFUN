import { ArticleDoc } from "@/types";

export default function PostDetails({ post }: { post: ArticleDoc }) {
  return (
    <div className="py-20">
      <div className="container">
        <section
          className="max-w-3xl mx-auto prose prose-invert"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </div>
  );
}
