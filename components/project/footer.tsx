import { IProject } from "@/types";
import Link from "next/link";

import { SiSolana } from "react-icons/si";

export default function ProjectFooter({ post }: { post: IProject }) {
  return (
    <section className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">
        Join {post.header.title} Today
      </h2>
      <p className="text-lg text-gray-300 mb-6">
        Be part of the movement to revolutionize cancer research. Together, we
        can make a difference.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/get-cancercoin"
          className="flex flex-row justify-center items-center gap-2 bg-rose-800 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all"
        >
          <SiSolana />
          Fund Cancer Research
        </Link>
        <Link
          href="/jobs"
          className="flex flex-row justify-center items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all"
        >
          Join ShinDAO Today
        </Link>
      </div>
    </section>
  );
}
