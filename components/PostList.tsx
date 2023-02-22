import { Post } from "@/typings";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
        {post?.map((posts, i) => (
          <div className="">
            <p className=" text-sm font-semibold">{posts?.title}</p>
            <div className=" text-sm mt-3">{posts?.slug}</div>
            <Link
              className=" bg-slate-200 py-1 mt-1  px-2 text-xs mt-3"
              href=""
            >
              Read Full Article
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default PostList;
