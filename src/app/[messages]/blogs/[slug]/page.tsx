import ReadonlyEditor from "@/components/blog/_readonly-editor";
import { getBlog } from "@/lib/api/blogs";
import { notFound } from "next/navigation";
import React from "react";

export default async function Blog({ params }: { params: { slug: string } }) {
  let blog = null;

  try {
    const data = await getBlog(params.slug);
    if (!data?.html) return notFound();
    blog = data;
  } catch (err) {
    console.error(err);
  }

  return (
    <main className="min-h-[65vh] px-[10vw] py-[7rem] sm:py-[9rem]">
      <hr />
      <div className="pt-[2rem] sm:mx-auto sm:w-[50vw]">
        <ReadonlyEditor content={blog?.html} />
      </div>
    </main>
  );
}