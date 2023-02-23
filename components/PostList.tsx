import { Post } from "@/typings";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ClientSideRoute from "./Routes";
import { urlFor } from "@/sanity";
type Props = {
  post: Post[];
};

function PostList({ post }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex-col relative items-start  md:text-left md:flex-row flex  max-w-7xl px-10 mx-auto"
    >
      <div className="w-2/6 rounded-md bg-[#e2f3f6ba] px-6 py-3 ">
        {post?.map((posts) => (
          <ClientSideRoute key={posts._id} route={`/post/${posts.slug}`}>
            <div className="">
              <p className=" text-[10px] flex justify-end items-end">
                {new Date(posts?.publishedAt).toDateString().slice(4)}
              </p>
              <motion.img
                className="object-cover object-left lg:object-center"
                src={urlFor(posts?.mainImage).url()}
                alt={posts?.author.name}
              />
              <p className=" text-sm font-semibold">
                {posts?.title} {posts?.author.name}
              </p>
              <div className=" text-sm mt-3">{posts?.description}</div>
              {/* <Link
                posts={posts._id}
                key={index}
                href={`/posts/[slug]`}
                as={`/posts/${posts?.slug}`}
                className=" bg-slate-200 py-1 mt-1  px-2 text-xs mt-3"
              >
                Read Full Article
              </Link> */}
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </motion.div>
  );
}

export default PostList;
