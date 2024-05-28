import { useCommand } from "@/contexts/CommandContext";
import React from "react";

const CommandTitle = () => {
  const { showCommandBar, setShowCommandBar } = useCommand();

  return (
    <button
      onClick={() => setShowCommandBar((prev) => !prev)}
      className="text-center text-md hover:bg-zinc-700 hover:cursor-pointer font-bold transition-all duration-300 bg-black text-white p-2 rounded-lg group"
    >
      Press{" "}
      <code className="bg-slate-400 text-md group-hover:bg-white group-hover:text-black transition-all duration-300 ease-in-out text-black rounded-lg px-2 py-1">
        ctrl+k
      </code>{" "}
      to {showCommandBar ? "close" : "open"} the command bar
    </button>
  );
};

export default CommandTitle;
