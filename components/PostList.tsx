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
      className="h-screen flex-col relative justify-evenly items-start  md:text-left md:flex-row flex  max-w-7xl px-10 mx-auto"
    >
      <div className="w-2/6 ">
        {post?.map((posts, i) => (
          <div className="">
            <p className=" text-sm font-semibold">{posts?.title}</p>
            <div className=" text-sm">{posts?.slug}</div>
            <Link href="">Read Full Article</Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default PostList;
