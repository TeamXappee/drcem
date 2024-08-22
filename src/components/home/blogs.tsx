import React from "react";
import SectionTitle from "../shared/section-title";
import Image from "next/image";
import { getBlogs } from "@/lib/api/blogs";
import LocaleLink from "../shared/localeLink";
import { NotebookText } from "lucide-react";

export default async function Blogs() {
  const blogs = await getBlogs(0, 3);
  console.log(blogs);
  return (
    <div className="space-y-10 ">
      <SectionTitle>Our featured blogs</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-3">
        {blogs?.map((blog: any) => (
          <div key={blog.slug} className="space-y-4 group">
            <LocaleLink href={`/blogs/${blog.slug}`}>
              {blog.cover ? (
                <img
                  className="object-cover w-full duration-500 ease-in-out aspect-video rounded-2xl brightness-90 "
                  width={600}
                  height={400}
                  src={blog.cover}
                  alt={blog.title}
                />
              ) : (
                <div className="grid shadow-sm rounded-2xl aspect-video bg-muted place-content-center">
                  <NotebookText className="text-muted-foreground" strokeWidth={1} size={35} />
                </div>
              )}
            </LocaleLink>
            <div className="px-4 pb-4 space-y-2 text-center ">
              <LocaleLink href={`/blogs/${blog.slug}`}>
                <h3 className="text-lg font-semibold cursor-pointer text-cyan-950 group-hover:underline">
                  {blog.title}
                </h3>
              </LocaleLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
