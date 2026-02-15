"use client";

import { motion } from "framer-motion";

interface ICardProps {
  oClassName?: string;
  children?: any;
}

const Card = ({ oClassName, children }: ICardProps) => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className={`flex flex-col justify-between items-center p-2 dark:bg-theme-dark-alt bg-theme-light-alt rounded-md shadow ${oClassName}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
