import React from "react";
import { Socials } from "@/typings";
import { SocialIcon } from "react-social-icons";
type Props = {};

function Footer({}: Props) {
  return (
    <div className=" justify-center items-center sm:mt-16 flex flex-col">
      <div className=" md:hidden"></div>
      <p className=" text-sm">Ioraver Godwin Nicholas — © 2023</p>
    </div>
  );
}

export default Footer;
