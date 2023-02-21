import React from "react";
import { motion } from "framer-motion";
import { ProfileInfo } from "@/typings";
type Props = {
  profileInfo: ProfileInfo;
};

function About({ profileInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex-col relative items-center md:text-left md:flex-row flex  max-w-7xl px-10 justify-evenly mx-auto"
    >
      <h3 className=" text-sm absolute top-10 uppercase tracking-[15px] text-gray-500">
        About
      </h3>
      <motion.img
        initial={{
          x: -100,
        }}
        transition={{ duration: 0.8 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        src="https://i.ibb.co/5jHTHVt/indexk.jpg"
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded md:w-64 md:h-95 xl:w-[450px] xl:h-[550px]"
      />
      <div className=" space-y-10 px-0 mt-6 md:px-10">
        <p className=" text-sm leading-6 text-center">
          {profileInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
