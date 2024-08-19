import { blogsArray } from "@/blogs";
import LocaleLink from "@/components/shared/localeLink";
import SectionTitle from "@/components/shared/section-title";
import { MessageCircleQuestion } from "lucide-react";
import { useTranslations } from "next-intl";

const Faqs = () => {
  const t = useTranslations("FAQs");

  return (
    <main className="min-h-screen py-20 sm:py-10">
      <div className="flex flex-col  sm:mx-[10%] lg::mx-[15%] 2xl:mx-[20%] px-6 sm:px-16   ">
        <SectionTitle className="relative flex flex-col items-center justify-center gap-3 mb-10 sm:items-start sm:flex-row ">
          Blogs
          <MessageCircleQuestion size={30} />
        </SectionTitle>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
          {blogsArray.map((blog, i) => (
            <div
              key={i}
              className="space-y-4 bg-muted rounded-xl"
            >
              <div className="bg-gray-300 rounded-lg aspect-video "></div>
              <div className="grid flex-1 gap-2 px-4 pb-4 ">
              <div className=" h-[150px] sm:h-[200px] space-y-2">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-sm font-medium text-gray-500">
                  {blog.subTitle.slice(0, 140)}..
                </p>
              </div>
                <LocaleLink
                  href={`/blogs/${blog._id}`}
                  className="p-2 text-sm text-center text-white rounded-lg bg-primary"
                >
                  Read the blog
                </LocaleLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Faqs;
