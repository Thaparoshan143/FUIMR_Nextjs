"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface INavProps {
  oClassName?: string;
  children?: any;
}

interface INavItem {
  label: string;
  url: string;
}

const Navbar = ({ oClassName, children }: INavProps) => {
  return (
    <motion.nav
      initial={{ y: "-50%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      // viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className={`z-50 w-full flex flex-row justify-evenly items-center ${oClassName}`}
    >
      {children}
    </motion.nav>
  );
};

export const NavItem = ({ label, url }: INavItem) => {
  return (
    <Link
      href={url}
      className="text-theme-white hover:bg-theme-alt font-bold text-center transition-colors duration-300 p-2 px-3 m-2 rounded-md"
    >
      {label}
    </Link>
  );
};

export default Navbar;
