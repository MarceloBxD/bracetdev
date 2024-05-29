"use client";

import Command from "../../components/Command";

// Import the React library
import React from "react";
import { useCommand } from "@/contexts/CommandContext";
import { Presentation } from "../../components/Presentation";

import { motion } from "framer-motion";

export default function Home() {
  const { showCommandBar } = useCommand();

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
    <main className="flex container flex-col justify-center items-center h-screen text-white">
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Presentation />
      </motion.div>

      {showCommandBar && <Command />}
    </main>
  );
}
