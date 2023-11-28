"use client";

import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";

const NavBar = () => {
  return (
    <nav className="py-12 mb-28 flex items-center justify-center list-none font-semibold ">
      <li className="text-sm px-2 md:text-lg font-semibold hover:text-[#3c3c43] text-[#7e7e83] dark:hover:text-white transition duration-300 ease-in-out">
        <Link href="/">About</Link>
      </li>
      <li className="text-sm px-2 md:text-lg font-semibold hover:text-[#3c3c43] text-[#7e7e83] dark:hover:text-white transition duration-300 ease-in-out">
        <Link href="/blog">Blog</Link>
      </li>
      <li className="text-sm pl-2 pr-4 md:text-lg font-semibold hover:text-[#3c3c43] text-[#7e7e83] dark:hover:text-white transition duration-300 ease-in-out">
        <Link href="mailto:natanael.silva.souza62@gmail.com">Contact me</Link>
      </li>
      <ThemeSwitcher />
    </nav>
  );
};

export default NavBar;
