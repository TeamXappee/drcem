export const getBlogs = async (page: number, pageSize: number, locale: string) => {
  // console.log("ssssssssss",lang)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/blogs/published?page=${page}&pageSize=${pageSize}&lang=${locale}`,
    // `${process.env.NEXT_PUBLIC_API}/blogs/published?page=${page}&pageSize=${pageSize}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-connection-key": "cem-baysal",
      },
    }
  );
  const data = await res.json();
  // console.log(res)
  return data.blogs;
};

export const getBlog = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blogs/slug/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-connection-key": "cem-baysal",
    },
  });
  const data = await res.json();
  return data.blog;
};
