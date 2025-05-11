export default function Article({ contentHtml }: { contentHtml: string }) {
  return (
    <article
      className="prose prose-invert prose-lg max-w-5xl mx-auto mb-12"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
