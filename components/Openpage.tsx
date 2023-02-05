import React from "react";
import Nav from "./Nav";
type Props = {};

function Openpage({}: Props) {
  return (
    <div className=" flex h-screen flex-col items-center justify-center text-center">
      <h1 className=" text-base text-bol border-b border-gray-500 uppercase text-gray-500">
        IORAVER GODWIN
      </h1>
      <h2 className=" mt-3 text-sm uppercase text-gray-500 tracking-[10px]">
        AUTHOR AND BOOK WRITTER
      </h2>
      <Nav />
    </div>
  );
}

export default Openpage;
