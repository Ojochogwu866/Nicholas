import React from "react";
import { motion } from "framer-motion";
import avatar from "../pages/Images/avatar.svg";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex-col relative items-center md:text-left md:flex-row flex max-w-7xl px-10 justify-evenly mx-auto"
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
        src={avatar}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className=" space-y-10 px-0 mt-6 md:px-10">
        <p className=" text-sm leading-6 text-center">
          Nicholas Godwin is a prolific writer based in Los Angeles. A Nobel
          Literary Fellow and Tin House Scholar, he has been a finalist for the
          Iowa Review Prize in Fiction, the New England Review's Emerging Writer
          Award, and a nominee for three Pushcart Prizes. His work has appeared
          in or is forthcoming from Ecotone, New England Review, Fence, the
          Idaho Review, the Cincinnati Review, Catapult, Joyland, and the Adroit
          Journal, among others. He holds a BA in English and Philosophy from
          Seattle University and an MFA from Ohio State University, where he was
          awarded the Helen Earnhart Harley Creative Writing Fellowship Award.
          He is represented by Soumeya Roberts.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
