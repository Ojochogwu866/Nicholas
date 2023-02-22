import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Article({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex-col relative items-center md:text-left md:flex-row flex  max-w-7xl px-10 justify-evenly mx-auto"
    ></motion.div>
  );
}

export default Article;
