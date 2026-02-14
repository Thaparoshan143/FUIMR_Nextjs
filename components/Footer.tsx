"use client";

import { FaHeartbeat } from "react-icons/fa";
import Link from "next/link";

interface IFotProps {
  oClassName?: string;
  children?: any;
}

interface IFotItem {
  label: string;
  url: string;
}

const Footer = ({ oClassName, children }: IFotProps) => {
  return (
    <footer
      className={`min-h-[12vh] w-full text-center flex flex-col justify-around items-center py-6 ${oClassName}`}
    >
      {children}
      <hr className="w-[30%] my-2" />
      <span className="font-light text-s">
        Designed with{" "}
        <FaHeartbeat className="inline-block text-red-700 font-bold" /> | All
        copyright reserved @{new Date().getFullYear()}{" "}
      </span>
      <span className="text-s font-light">
        Powered by <b>Next.js</b> | Hosted on <b>Vercel</b>
      </span>
    </footer>
  );
};

export const FotItem = ({ label, url }: IFotItem) => {
  return (
    <Link href={url} className="hover:underline">
      {label}
    </Link>
  );
};

export default Footer;
