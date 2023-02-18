import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Socials } from "@/typings";
import Link from "next/link";

type Props = {
  socials: Socials[];
};

function Header({ socials }: Props) {
  return (
    <header className=" sticky p-4 mx-auto top-0 flex justify-between  max-w-7xl items-start z-30 xl:items-center">
      {/*icons*/}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className=" flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className=" flex flex-row items-center gray-300 cursor-pointer"
      >
        <SocialIcon
          className=" cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline text-sm text-gray-400">
          SAY HI TO NICK
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
