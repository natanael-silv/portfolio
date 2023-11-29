import React from "react";
import LinkedinSvg from "/public/svgs/linkedin.svg";
import GitHubSvg from "/public/svgs/github.svg";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="border-t-[1px] flex-col md:flex-row py-4 dark:border-[#989899] flex border-[#3c3c43] items-center justify-between font-semibold">
      <div>{t("copyright")}</div>
      <div className="flex py-3">
        {t("links")}
        <a href="https://github.com/natanael-silv">
          <GitHubSvg className="mx-4 fill=[#6a6a64]" />
        </a>
        <a href="https://www.linkedin.com/in/natanael-silvas/">
          <LinkedinSvg className="mx-4 fill=[#6a6a64]" />
        </a>
      </div>
    </footer>
  );
}
