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
    </div>
  );
};
