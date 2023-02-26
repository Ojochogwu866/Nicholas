import React from "react";
import Nav from "./Nav";
import { Profile } from "@/typings";
type Props = {
  profile: Profile;
};

function Openpage({ profile }: Props) {
  return (
    <div className=" flex h-screen sx:px-5 flex-col items-center justify-center text-center">
      <h1 className=" text-[75px] md:text-[200px]  font-extrabold border-b border-gray-500 tracking-tighter md:leading-[200px] uppercase leading-[65px] pb-6 ">
        {profile?.name}
      </h1>
      <h2 className=" mt-3 text-sm sx:text-[12px] uppercase  tracking-[10px]">
        {profile?.title}
      </h2>
      <Nav />
    </div>
  );
}
export default Openpage;
