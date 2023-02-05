import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";
type Props = {};

function publications({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden flex-scol md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" text-sm absolute top-24 uppercase tracking-[15px] text-gray-500">
        SHELF & PUBLICATIONS
      </h3>
      <div className="">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </motion.div>
  );
}

export default publications;
