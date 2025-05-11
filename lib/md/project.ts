import fs from "fs/promises";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

import { IProjectFrontmatter, IProject } from "@/types";
import { fileExists, parseMarkdownFile } from "@/lib/md/utils";
import { rehypeOptimizeImages } from "@/lib/md/plugins";

const DEFAULT_PROJECT_INFO = {
  slug: "null",
  header: {
    title: "",
    description: "",
  },
  phases: [],
  details: {
    commitments: {
      bioCommitted: "",
      curationLimit: "",
      totalSupply: "",
      curatorAllocation: "",
      curationFDV: "",
      numberOfCurators: "",
    },
    tokens: [],
  },
  curation: {
    message: "",
    successMessage: "",
    failureMessage: "",
    fee: "",
    details: {
      vestingPeriodCliff: "",
      tokenSupplyForCurators: "",
      curatorLockup: "",
    },
    docs: "",
  },
  fundraising: {
    type: "",
    details: {
      tokensSold: "",
      vestingPeriodCliff: "",
    },
    howItWorks: "",
    auctionDocs: "",
  },
  marketHypothesis: [],
  missionStatement: "",
  additionalDocumentation: [],
  projectOverview: {
    description: "",
    emphasis: "",
  },
  researchFocusAreas: [],
  teamCommunity: {
    members: [],
    socialLinks: [],
  },
  projectRoadmap: [],
  valueCaptureModel: {
    description: "",
    diagram: {
      alt: "",
      src: "",
    },
  },
  recommendedReads: [],
};

const DEFAULT_PROJECT_FRONTMATTER: IProjectFrontmatter = {
  ...DEFAULT_PROJECT_INFO,
};

const EMPTY_PROJECT_INFO: IProject = {
  ...DEFAULT_PROJECT_INFO,
  contentHtml: "",
};

export const getMdProjectContent = async (slug: string): Promise<IProject> => {
  const mdPath = path.join(process.cwd(), `article/project`, `${slug}.md`);
  if (!(await fileExists(mdPath))) return EMPTY_PROJECT_INFO;

  const parsed = await parseMarkdownFile(mdPath);
  if (!parsed) return EMPTY_PROJECT_INFO;

  const frontmatter = {
    ...DEFAULT_PROJECT_FRONTMATTER,
    ...(parsed.data as IProject),
  };

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

    return { ...frontmatter, contentHtml: processedContent.toString() };
  } catch (err) {
    console.error(`Markdown render error for ${slug}:`, err);
    return EMPTY_PROJECT_INFO;
  }
};

export const getMdProjects = async (): Promise<IProject[]> => {
  const dirPath = path.join(process.cwd(), `article/project`);
  if (!(await fileExists(dirPath))) return [];

  let files: string[];
  try {
    files = await fs.readdir(dirPath);
  } catch (err) {
    console.error("Failed reading directory:", err);
    return [];
  }

  const posts: IProject[] = [];

  for (const fileName of files) {
    if (!fileName.endsWith(".md")) continue;

    const fullPath = path.join(dirPath, fileName);
    const parsed = await parseMarkdownFile(fullPath);
    if (!parsed) continue;

    const data = {
      ...DEFAULT_PROJECT_FRONTMATTER,
      ...(parsed.data as IProject),
    };

    posts.push(data);
  }

  return posts;
};
