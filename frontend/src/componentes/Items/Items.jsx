import React from "react";
import { motion } from "framer-motion";
const Items = ({ img, text, title }) => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="mx-auto h-[350px] text-center overflow-hidden border-2 border-gray-300 px-8 py-4 space-y-2 rounded-xl hover:bg-green-100"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="flex justify-start">
        <img className="w-20" src={img} alt="imagen" />
      </div>
      <div className="flex justify-start">
        <h1 className="text-left font-barlow-500 text-2xl">{title}</h1>
      </div>
      <div className="flex justify-start">
        <p className="text-gray-600 text-left font-barlow-400 text-lg ">
          {text}
        </p>
      </div>
    </motion.div>
  );
};

export default Items;
