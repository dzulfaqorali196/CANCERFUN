import { visit } from "unist-util-visit";
import type { Node } from "unist";
import type { Element } from "hast";

export function rehypeOptimizeImages() {
  return (tree: Node) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "img" && node.properties?.src) {
        const src = node.properties.src;

        if (typeof src === "string") {
          node.properties.src = `/api/optimize?url=${encodeURIComponent(src)}`;
        }

        node.properties.loading = "lazy";
        node.properties.decoding = "async";

        if (!node.properties.width) {
          node.properties.width = 800;
        }
        if (!node.properties.height) {
          node.properties.height = "auto";
        }
      }
    });
  };
}
