"use client";

import { IProject } from "@/types";

export default function ProjectHeader({ post }: { post: IProject }) {
  return (
    <section className="max-w-5xl mx-auto text-center mb-12 flex flex-col items-center gap-4">
      <h1 className="text-4xl sm:text-5xl font-normal mb-4">
        {post.header.title}
      </h1>
      <p className="text-lg sm:text-xl text-gray-300">
        {post.header.description}
      </p>
      {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm sm:text-base text-gray-300">
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-xl" />
          <span>{post.author}</span>
        </div>
        {validDate && (
          <div className="flex items-center gap-2">
            <FiCalendar className="text-lg" />
            <span>{validDate}</span>
          </div>
        )}
      </div> */}
    </section>
  );
}
