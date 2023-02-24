import React from "react";
import { motion } from "framer-motion";
import { ProfileInfo } from "@/typings";
import { urlFor } from "@/sanity";
type Props = {
  profileInfo: ProfileInfo;
};

function About({ profileInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex-col relative items-center md:text-left md:flex-row flex  max-w-7xl px-5 md:px-10 justify-evenly mx-auto"
    >
      <h3 className=" text-sm absolute top-5 uppercase tracking-[15px] z-50 text-gray-500">
        About
      </h3>
      <div className="hidden md:flex h-[300px] w-full -z-50 bg-[#2f1c6a]/30 bg-opacity-80" />
      <motion.img
        initial={{
          x: -100,
        }}
        transition={{ duration: 0.8 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        src={urlFor(profileInfo?.profileImage).url()}
        viewport={{ once: true }}
        className="mt-14 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded md:w-64 md:h-90 xl:w-[450px] xl:h-[550px]"
      />
      <div className=" absolute h-[200px] top-14 w-[300px] rounded-tl-[30%] -z-50 bg-[#2f1c6a]/50 bg-opacity-80" />
      <div className="hidden md:flex h-[300px] w-full -z-50 bg-[#2f1c6a]/30 bg-opacity-80" />
      <div className=" md:space-y-10 px-0 md:px-10">
        <p className=" text-xs md:text-sm md:leading-6 leading-6 text-left ">
          {profileInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
