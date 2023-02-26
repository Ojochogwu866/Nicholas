import { Socials } from "@/typings";
import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {
  socials: Socials[];
};

function Footer({ socials }: Props) {
  return (
    <div className=" justify-center bg-white w-full backdrop-blur-md  bg-opacity-10 sm:-mt-44 items-center flex  bottom-0 mx-auto ">
      <div className="pl-[10%] flex justify-center items-center">
        <div className=" sx:flex md:hidden">
          {socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="#2F1C6A"
              bgColor="transparent"
              style={{ width: 30 }}
            />
          ))}
        </div>
        <p className=" text-[13px] underline">
          Ioraver Godwin Nicholas — © 2023
        </p>
      </div>
    </div>
  );
}
export default Footer;
