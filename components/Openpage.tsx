import React from "react";
import Nav from "./Nav";
type Props = {};

function Openpage({}: Props) {
  return (
    <div className=" flex flex-col items-center justify-center text-center">
      <h2 className=" text-sm uppercase text-gray-500 tracking-[10px]">
        AUTHOR AND BOOK WRITTER
      </h2>
      <h1 className=" text-base mt-3 text-bol border-b border-gray-500 uppercase text-gray-500">
        IORAVER GODWIN
      </h1>
      <Nav />
    </div>
  );
}

export default Openpage;
