// Import Libraries
import React from "react";
import { motion } from "framer-motion";
import Hotkeys from "react-hot-keys";

// Import Components And Data
import CommandTitle from "../CommandTitle";
import { BRACET_DATA } from "@/data/bracet-description";
import { useCommand } from "@/contexts/CommandContext";

export const Presentation = () => {
  const { showCommandBar, setShowCommandBar } = useCommand();

  return (
    <div className="flex flex-col text-center justify-center">
      <h1 className="text-4xl font-bold text-center md:text-left">
        {BRACET_DATA.name}
      </h1>
      <p className="text-2xl font-bold text-center md:text-left text-gray-500">
        {BRACET_DATA.role}
      </p>
      <p className="text-lg font-light text-center md:text-left text-gray-500">
        {BRACET_DATA.description}
      </p>
      <div className="flex justify-center md:justify-start mt-4">
        <Hotkeys
          keyName="ctrl+k,command+k"
          onKeyDown={() => setShowCommandBar((prev) => !prev)}
        >
          {!showCommandBar && <CommandTitle />}
        </Hotkeys>
      </div>
      <motion.div
        className="fixed rounded-lg group flex hover:bg-white transition-colors duration-300 items-center border cursor-pointer p-1 z-50 bottom-6 left-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <a
          href="/Cv-MarceloBracet.pdf"
          download="bracet-cv.pdf"
          className="text-white group-hover:text-black font-bold text-sm px-2 py-2 rounded-lg"
        >
          Download CV
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white group-hover:text-black "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </div>
  );
};
