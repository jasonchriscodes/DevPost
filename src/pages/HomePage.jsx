import { getBlogs } from "@/services/apiBlog";
import BlogContainer from "@/ui_components/BlogContainer";
import Header from "@/ui_components/Header";
import Spinner from "@/ui_components/Spinner";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const HomePage = () => {
  const {
    isPending,
    isError,
    error,
    data: blogs,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  console.log(blogs);

  return (
    <>
      <Header />
      <BlogContainer isPending={isPending} blogs={blogs} />
    </>
  );
};

export default HomePage;
