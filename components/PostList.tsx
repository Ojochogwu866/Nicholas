import { Post } from "@/typings";
import React from "react";
import { motion } from "framer-motion";
import ClientSideRoute from "./Routes";
import { urlFor } from "@/sanity";
interface Props {
  post: [Post];
}

function PostList({ post }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=""
    >
      <div className="">
        {post?.map((posts) => (
          <ClientSideRoute key={posts._id} route={`/post/${posts.slug}`}>
            <div className="group cursor-Pointer  mt-2 flex flex-col">
              <div className=" relative space-y-4  w-11/12 mx-auto h-[200px] md:h-[280px]  drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <motion.img
                  className=" object-cover object-center h-full w-full"
                  src={urlFor(posts?.mainImage).url()}
                  alt={posts?.author.name}
                />
                <div className=" absolute bottom-0 w-full bg-opacity-50 bg-black  rounded drop-shadow text-white  p-3 flex justify-between flex-col">
                  <p className=" text-sm font-semibold">{posts?.title}</p>
                  <p className=" text-[10px] flex justify-end items-end">
                    {new Date(posts?.publishedAt).toDateString().slice(4)}
                  </p>

                  <div className=" w-3/5 text-xs md:text-sm mt-3">
                    {posts?.description}
                  </div>
                  <span className=" mt-2 text-xs font-normal">
                    Author: {posts?.author.name}
                  </span>
                </div>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </motion.div>
  );
}

export default PostList;
