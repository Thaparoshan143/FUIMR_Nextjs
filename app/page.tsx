"use client";

import Footer, { FotItem } from "@/components/Footer";
import Navbar, { NavItem } from "@/components/Navbar";
import { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

enum ThemeState {
  LIGHT = 0,
  DARK = 1,
}

export default function Home() {
  const [theme, setTheme] = useState<ThemeState>(ThemeState.DARK);

  return (
    <main
      className={`relative min-h-screen w-screen flex flex-col justify-between items-center ${theme === ThemeState.DARK ? "bg-theme-dark text-theme-light" : "bg-theme-light text-theme-dark"}`}
    >
      <Navbar oClassName="bg-theme shadow-md">
        <div className="flex flex-row">
          <NavItem label="Home" url="/" />
          <NavItem label="Services" url="/services" />
          <NavItem label="Projects" url="/projects" />
          <NavItem label="About" url="/about" />
          <NavItem label="Contact" url="/contact" />
        </div>
        <button
          onClick={() =>
            setTheme(
              theme === ThemeState.DARK ? ThemeState.LIGHT : ThemeState.DARK,
            )
          }
          className="border-theme text-theme-white text-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          {theme ? <BiMoon /> : <BiSun />}
        </button>
      </Navbar>

      {/* <img src="/bg.png" className="absolute w-screen h-screen object-fill -z-10" /> */}
      <h1 className="text-5xl text-theme font-main font-extrabold">FUIMR</h1>
      <span className="text-theme font-light">
        All Engineering Solution at one place
      </span>

      <Footer>
        <hr className="w-[60%] my-5" />
        <div className="w-[60%] flex flex-row justify-evenly items-center">
          <FotItem label="Sitemap" url="/sitemap" />
          <FotItem label="Blog" url="/blog" />
          <FotItem label="Recent Work" url="/recentwork" />
        </div>
      </Footer>
    </main>
  );
}
