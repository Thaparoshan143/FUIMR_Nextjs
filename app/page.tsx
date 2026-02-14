"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main
      className={`relative min-h-screen w-screen flex flex-col justify-between items-center`}
    >
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
    </main>
  );
}
