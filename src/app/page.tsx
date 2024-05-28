"use client";

import CommandTitle from "../../components/CommandTitle";
import Command from "../../components/Command";

// Import the React library
import React from "react";
import Hotkeys from "react-hot-keys";
import { useCommand } from "@/contexts/CommandContext";

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

  console.log(showCommandBar);

  return (
    <main className="flex flex-col items-center justify-center h-screen text-white bg-[#08070B]">
      <Hotkeys
        keyName="ctrl+k,command+k"
        onKeyDown={() => setShowCommandBar((prev) => !prev)}
      >
        {!showCommandBar && <CommandTitle />}
      </Hotkeys>

      {showCommandBar && <Command />}
    </main>
  );
}
