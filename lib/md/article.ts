import fs from "fs/promises";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

import { ArticleDoc, ArticleType, IBlogPostFrontmatter } from "@/types";
import { fileExists, parseMarkdownFile } from "@/lib/md/utils";
import { rehypeOptimizeImages } from "@/lib/md/plugins";

const DEFAULT_BLOG_CONTENT = {
  title: "Untitled",
  date: "Unknown",
  author: "Anonymous",
  excerpt: "",
  project_phase: {},
};

const DEFAULT_BLOG_FRONTMATTER: IBlogPostFrontmatter = DEFAULT_BLOG_CONTENT;

const EMPTY_POST: ArticleDoc = {
  id: "null",
  type: ArticleType.UNKNOWN,
  title: "",
  date: "",
  author: "",
  excerpt: "",
  contentHtml: "<p>Error processing Markdown content.</p>",
  project_phase: {},
  tags: [],
};

export const getMdContent = async (
  slug: string,
  type: ArticleType
): Promise<ArticleDoc> => {
  const mdPath = path.join(process.cwd(), `article/${type}`, `${slug}.md`);
  if (!(await fileExists(mdPath))) return EMPTY_POST;

  const parsed = await parseMarkdownFile(mdPath);
  if (!parsed) return EMPTY_POST;

  const frontmatter = { ...DEFAULT_BLOG_FRONTMATTER, ...parsed.data };

  try {
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .use(rehypeOptimizeImages)
      .process(parsed.content);

    return {
      id: slug,
      type,
      title: frontmatter.title ?? "",
      date: frontmatter.date ?? "",
      author: frontmatter.author ?? "",
      excerpt: frontmatter.excerpt ?? "",
      project_phase: frontmatter.project_phase ?? {},
      contentHtml: processedContent.toString(),
      coverImage: frontmatter.coverImage ?? "",
      tags: frontmatter.tags ?? [],
    };
  } catch (err) {
    console.error(`Markdown render error for ${slug}:`, err);
    return EMPTY_POST;
  }
};

export const getPosts = async (type: ArticleType): Promise<ArticleDoc[]> => {
  const dirPath = path.join(process.cwd(), `article/${type}`);
  if (!(await fileExists(dirPath))) return [];

  let files: string[];
  try {
    files = await fs.readdir(dirPath);
  } catch (err) {
    console.error("Failed reading directory:", err);
    return [];
  }

  const posts: ArticleDoc[] = [];

  for (const fileName of files) {
    if (!fileName.endsWith(".md")) continue;

    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(dirPath, fileName);
    const parsed = await parseMarkdownFile(fullPath);
    if (!parsed) continue;

    const data = { ...DEFAULT_BLOG_FRONTMATTER, ...parsed.data };

    posts.push({
      id,
      type,
      title: data.title ?? "",
      date: data.date ?? "",
      author: data.author ?? "",
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      featured: data.featured,
      contentHtml: "",
      project_phase: data.project_phase,
    });
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
