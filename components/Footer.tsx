import React from "react";
import { Socials } from "@/typings";
import { SocialIcon } from "react-social-icons";
type Props = {
  socials: Socials[];
};

function Footer({ socials }: Props) {
  return (
    <div className=" justify-center items-center sm:mt-16 flex flex-col">
      <div className=" md:hidden">
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="#2F1C6A"
            bgColor="transparent"
            style={{ width: 32 }}
          />
        ))}
      </div>
      <p className=" text-sm">Ioraver Godwin Nicholas — © 2023</p>
    </div>
  );
}

export default Footer;
