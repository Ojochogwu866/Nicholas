import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Cards({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[400px] snap-center bg-[#292929] p-10 hover:opacity-30 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" h-32 w-32 rounded-md xl:w-[200px] xl:h-[200px] object-cover"
        alt=""
        src=""
      />
      <div className=" px-0 md:px-10">
        <p className=" font-normal text-base mt-1">Jewel no flavor</p>
        <a className=" text-sm font-normal" href="">
          Click to read more and Purchase
        </a>
      </div>
    </article>
  );
}

export default Cards;
