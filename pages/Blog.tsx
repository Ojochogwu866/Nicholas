import React from "react";
import Header from "@/components/Header";
import { Socials, Post } from "@/typings";
import { GetStaticProps } from "next";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchPosts } from "@/utils/fetchPosts";
import Postlist from "@/components/PostList";
type Props = {
  socials: Socials[];
  post: Post[];
};

function Blog({ socials, post }: Props) {
  return (
    <div className="bg-[#fff] snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden  z-0 scrollbar scrollbar-none">
      <Header socials={socials} />
      <div className=" snap-center">
        <Postlist post={post} />
      </div>
    </div>
  );
}
export default Blog;
export const getStaticProps: GetStaticProps<Props> = async () => {
  const socials: Socials[] = await fetchSocials();
  const post: Post[] = await fetchPosts();
  return {
    props: {
      socials,
      post,
    },
  };
};
