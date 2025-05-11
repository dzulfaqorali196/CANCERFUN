import fs from "fs/promises";
import matter from "gray-matter";

/**
 * Checks if a file exists at the given path.
 * @param filePath - The path to the file.
 * @returns A promise that resolves to `true` if the file exists, otherwise `false`.
 */
export const fileExists = async (filePath: string): Promise<boolean> => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

/**
 * Parses a Markdown file and extracts its frontmatter and content using `gray-matter`.
 * @param filePath - The path to the Markdown file.
 * @returns A promise that resolves to the parsed frontmatter and content, or `null` if parsing fails.
 */
export const parseMarkdownFile = async (filePath: string) => {
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    return matter(fileContents);
  } catch {
    return null;
  }
};
