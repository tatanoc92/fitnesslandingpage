"use client";
import { motion } from "framer-motion";

export default function Button({ text, color }) {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`uppercase tracking-wider font-bold ${
          color === "primary"
            ? "bg-primary"
            : "bg-transparent border border-solid border-white"
        } p-2 border-white rounded-md`}
      >
        {text}
      </motion.button>
    </div>
  );
}
