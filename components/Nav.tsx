import React from "react";
import Link from "next/link";

type Props = {};

function Nav({}: Props) {
  return (
    <div className=" mt-3">
      <div className="flex w-full gap-x-6">
        <Link href="#about">
          <button className="navbutton">/ ABOUT</button>
        </Link>
        <Link href="#shelf&publications">
          <button className="navbutton">/ SHELF&PUBLICATIONS</button>
        </Link>
        <Link href="/Blog">
          <button className="navbutton">/ BLOG</button>
        </Link>
        <Link href="#speak-with-nick">
          <button className="navbutton">/ CONTACT</button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
