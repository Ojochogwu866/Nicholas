import React from "react";
import { EnvelopeIcon, MapinIcon } from "@heroicons/react";
type Props = {};

function Contact({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto">
      <h3 className=" text-sm absolute top-10 uppercase tracking-[15px] text-gray-500">
        SAY HI TO NICK
      </h3>
      <div className="flex flex-col space-y-10">
        <p>Got anyhting to say? Send me a message, I will get back to you. </p>
        <div className=" ">
          <div className="">
            <EnvelopeIcon />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
