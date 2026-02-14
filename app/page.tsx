"use client";

import Footer, { FotItem } from "@/components/Footer";
import Navbar, { NavItem } from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main
      className={`relative min-h-screen w-screen flex flex-col justify-between items-center`}
    >
      <Navbar oClassName="bg-theme shadow-md">
        <div className="flex flex-row">
          <NavItem label="Home" url="/" />
          <NavItem label="Services" url="/services" />
          <NavItem label="Projects" url="/projects" />
          <NavItem label="About" url="/about" />
          <NavItem label="Contact" url="/contact" />
        </div>
      </Navbar>

      {/* <img src="/bg.png" className="absolute w-screen h-screen object-fill -z-10" /> */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="text-center flex flex-col gap-10"
      >
        <h1 className="text-5xl text-theme font-main font-extrabold">FUIMR</h1>
        <span className="text-theme font-light text-sm">
          All Engineering Solution at one place
        </span>
      </motion.section>

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
