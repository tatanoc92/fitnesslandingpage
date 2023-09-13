"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Card({ title, description, image, children }) {
  return (
    <motion.div
      className="w-52 h-96 bg-black rounded-3xl flex justify-center items-center"
      whileHover={{ scale: 1.4, rotate: 360 }}
    >
      <div class="absolute w-52 h-96 rounded-3xl bg-primary opacity-100 hover:opacity-0 transition-opacity duration-300 flex flex-col justify-around items-center">
        <h1 class="text-white text-center text-xl px-4">{title}</h1>
        <Image
          src={image}
          alt="Card Image"
          height={9}
          width={16}
          layout="responsive"
        />
      </div>
      <div class="flex flex-col justify-around items-center">
        <div className="mb-4">{children}</div>
        <p className="text-white text-center px-4">{description}</p>
      </div>
    </motion.div>
  );
}
