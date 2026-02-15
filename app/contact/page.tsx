"use client";

import FullPage from "@/components/FullPage";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { _socialHandles } from "@/lib/static/_info";

interface ISocialIcons {
  media: string;
  url: string;
}

const Contact = () => {
  return (
    <FullPage>
      <div className="flex flex-col gap-10">
        <h1 className="text-md">
          For collaboration, projects, discussion. Reach out to us
        </h1>
        <motion.div
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-1 justify-center items-center"
        >
          <span className="font-bold uppercase text-2xl">Roshan Thapa</span>
          <div className="flex flex-row gap-1">
            <label>Email: </label>
            <a
              className="hover:underline"
              href="mailto:thaparoshan3722@gmail.com"
            >
              thaparoshan3722@gmail.com
            </a>
          </div>
          <div className="flex flex-row gap-1">
            <label>Phone: </label>
            <a className="hover:underline" href="tel:+9779840034583">
              +9779840034583
            </a>
          </div>
          <motion.div
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 2 }}
            className="flex flex-row justify-start items-start my-5"
          >
            {_socialHandles.map(({ media, url }) => {
              return <SocialIcons key={media} media={media} url={url} />;
            })}
          </motion.div>
        </motion.div>
      </div>
    </FullPage>
  );
};

const SocialIcons = ({ media, url }: ISocialIcons) => {
  const socialIconStyle =
    "text-xl mx-4 hover:scale-110 hover:cursor-pointer transition-all duration-300";

  if (media == "Youtube") {
    return (
      <Link href={url}>
        <FaYoutube className={socialIconStyle + " hover:text-red-600"} />
      </Link>
    );
  } else if (media == "Github") {
    return (
      <Link href={url}>
        <FaGithub className={socialIconStyle + " hover:text-theme-w-alt"} />
      </Link>
    );
  }
};

export default Contact;
