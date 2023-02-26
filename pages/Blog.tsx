import React from "react";
import Header from "@/components/Header";
import { Socials, Post } from "@/typings";
import { GetStaticProps } from "next";
import Postlist from "@/components/PostList";
import Footer from "@/components/Footer";
import { sanityClient } from "@/sanity";
interface Props {
  socials: [Socials];
  post: [Post];
}
const social = `*[_type == "socials"]{
  _id,
  url
  }`;
const postList = `
  *[_type == "post"]{
    ...,
   'slug': slug.current,
    author->
  } | order(_createdAt desc)
  `;

export default function Blog({ socials, post }: Props) {
  return (
    <div className="bg-[#fff] snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden  z-0 scrollbar scrollbar-none">
      <Header socials={socials} />
      <div className=" snap-center">
        <Postlist post={post} />
      </div>
      <Footer />
    </div>
  );
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const socials = await sanityClient.fetch(social);
  const post = await sanityClient.fetch(postList);
  return {
    props: {
      socials,
      post,
    },
    revalidate: 60,
  };
};
