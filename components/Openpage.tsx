import React from "react";
import Nav from "./Nav";
import { Profile } from "@/typings";
type Props = {
  profile: Profile;
};

function Openpage({ profile }: Props) {
  return (
    <div className=" flex h-screen flex-col items-center justify-center text-center">
      <h1 className=" text-[200px] font-extrabold border-b border-gray-500 tracking-tighter leading-[200px] uppercase text-gray-500">
        {profile?.name}
      </h1>
      <h2 className=" mt-3 text-sm uppercase text-gray-500 tracking-[10px]">
        {profile?.title}
      </h2>
      <Nav />
    </div>
  );
}
export default Openpage;
