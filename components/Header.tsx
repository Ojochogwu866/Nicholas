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
    <header className=" sticky bg-white backdrop-blur-md bg-opacity-10 md:p-3 p-1 mx-auto top-0 flex justify-between  max-w-7xl items-start z-30 xl:items-center">
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
        className="hidden  md:flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="#2F1C6A"
            bgColor="transparent"
            style={{ width: 45 }}
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
        className=" md:flex flex-row  items-center gray-300 cursor-pointer"
      >
        <Link href="/#speak-with-nick">
          <SocialIcon
            className=" cursor-pointer "
            network="email"
            fgColor="#2F1C6A"
            bgColor="transparent"
          />
          <p className=" uppercase hidden  md:inline text-sm">SAY HI TO NICK</p>
        </Link>
      </motion.div>
    </header>
  );
}
export default Header;
