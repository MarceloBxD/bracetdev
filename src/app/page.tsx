"use client";

import CommandTitle from "../../components/CommandTitle";
import Command from "../../components/Command";

// Import the React library
import React from "react";
import Hotkeys from "react-hot-keys";
import { useCommand } from "@/contexts/CommandContext";
import Header from "../../components/Header";
import { Presentation } from "../../components/Presentation";

import { motion } from "framer-motion";

export default function Home() {
  const { showCommandBar, setShowCommandBar } = useCommand();

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="flex flex-col justify-center items-center h-screen text-white bg-[#08070B]">
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Presentation />
      </motion.div>

      {showCommandBar && <Command />}
    </main>
  );
}
