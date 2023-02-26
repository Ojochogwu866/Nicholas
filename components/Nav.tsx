import React from "react";
import Link from "next/link";

type Props = {};

function Nav({}: Props) {
  return (
    <div className=" mt-3">
      <div className="flex w-full gap-x-6 sx:gap-3 sx:text-[12px]">
        <Link href="#about">
          <button className="navbutton">/ ABOUT</button>
        </Link>
        <Link href="#shelf&publications">
          <button className="hidden md:flex navbutton">
            / SHELF&PUBLICATIONS
          </button>
          <button className="navbutton flex md:hidden">/PUBLICATIONS</button>
        </Link>
        <Link href="/blog">
          <button className="navbutton">/ BLOG</button>
        </Link>
        <Link href="/#speak-with-nick">
          <button className="navbutton">/ CONTACT</button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
