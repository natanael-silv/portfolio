"use client";
import { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import Moon from "/public/svgs/moon.svg";
import Sun from "/public/svgs/sun.svg";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleButtonClick = () => {
    console.log("clicked");
    setTheme(theme === "Light" ? "dark" : "Light");
  };
  return (
    <button
      onClick={handleButtonClick}
      className="flex items-center justify-center "
      title="Toggles light & dark transition"
    >
      {theme === "Light" ? (
        <Moon className="hover:fill-[#3c3c43] fill-[#939393]" />
      ) : (
        <Sun className=" hover:fill-white fill-[#737373]" />
      )}
    </button>
  );
};
