"use client";

import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { useTranslations } from "next-intl";

const NavBar = () => {
  const t = useTranslations("Navigation");
  return (
    <nav className="py-12 mb-28 flex items-center justify-center list-none font-semibold ">
      <li className="text-sm px-2 md:text-lg font-semibold hover:text-[#3c3c43] text-[#7e7e83] dark:hover:text-white transition duration-300 ease-in-out">
        <Link href="/">{t("about")}</Link>
      </li>
      <li className="text-sm px-2 md:text-lg font-semibold hover:text-[#3c3c43] text-[#7e7e83] dark:hover:text-white transition duration-300 ease-in-out">
        <Link href="/blog">{t("blog")}</Link>
      </li>
      <li className="text-sm pl-2 pr-4 md:text-lg font-semibold hover:text-[#3c3c43] text-[#7e7e83] dark:hover:text-white transition duration-300 ease-in-out">
        <Link href="mailto:natanael.silva.souza62@gmail.com">
          {t("contact")}
        </Link>
      </li>
      <ThemeSwitcher />
    </nav>
  );
};

export default NavBar;
