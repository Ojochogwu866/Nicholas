import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";
import { Shelf } from "@/typings";
import { urlFor } from "@/sanity";
import Link from "next/link";
type Props = {
  shelf: Shelf[];
};

function publications({ shelf }: Props) {
  return (
    <div className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center">
      <h3 className="hidden md:flex text-sm absolute top-8 uppercase tracking-[15px] z-50 text-gray-500">
        SHELF & PUBLICATIONS
      </h3>
      <h3 className="md:hidden text-sm absolute top-8 uppercase  tracking-[15px] text-gray-500">
        PUBLICATIONS
      </h3>
      <div className=" relative w-full overflow-x-scroll flex overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {shelf?.map((shef, i) => (
          <div className=" w-screen flex-shrink-0 snap-center flex justify-center mt-5 flex-col space-y-5 items-center  p-5 md:p-36 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(shef?.bookimage).url()}
              className="w-[200px]"
              alt=""
            />
            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-lg font-normal text-center">
                {shef?.booktitle}
              </h4>
              <p className=" text-xs leading-6 md:text-sm md:text-center text-left">
                {shef?.bookinformation}
              </p>
            </div>
            <Link
              className=" w-auto -mt-3 h-auto px-4 py-2 bg-[#2f1c6a] text-[#fff] uppercase text-sm"
              href={shef?.url}
            >
              Buy on Amazon
            </Link>
          </div>
        ))}
      </div>
      <div className=" w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}

export default publications;
