import { NextRequest } from "next/server";
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

// Constants
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_WIDTHS = [320, 480, 768, 1024, 1440, 1920];
const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) return new Response("No URL provided", { status: 400 });

  // Sanitize file path
  const filePath = url.split("?")[0];
  const relativePath = filePath.startsWith("/") ? filePath.slice(1) : filePath;
  const localPath = path.join(process.cwd(), "public", relativePath);
  const normalizedPath = path.normalize(localPath);

  if (!normalizedPath.startsWith(path.join(process.cwd(), "public"))) {
    console.error("Invalid file path:", normalizedPath);
    return new Response("Invalid file path", { status: 403 });
  }

  try {
    // Check file access
    await fs.access(normalizedPath);

    // Validate file extension
    const ext = path.extname(normalizedPath).toLowerCase();
    if (!SUPPORTED_EXTENSIONS.includes(ext)) {
      return new Response("Unsupported image type", { status: 415 });
    }

    // Check file size
    const stats = await fs.stat(normalizedPath);
    if (stats.size > MAX_FILE_SIZE) {
      return new Response("File too large", { status: 413 });
    }

    const buffer = await fs.readFile(normalizedPath);

    // Get and validate width
    const dummyUrl = new URL(url, "http://example.com");
    const imageWidth = dummyUrl.searchParams.get("w");
    const width =
      imageWidth && ALLOWED_WIDTHS.includes(parseInt(imageWidth))
        ? parseInt(imageWidth, 10)
        : 1024;

    // Optimize with Sharp
    const optimized = await sharp(buffer)
      .resize({ width, withoutEnlargement: true })
      .toFormat("webp")
      .toBuffer();

    return new Response(optimized, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (err) {
    console.error("Failed to optimize image:", err);
    return new Response("Image not found", { status: 404 });
  }
}
