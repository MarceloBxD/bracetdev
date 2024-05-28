import { useCommand } from "@/contexts/CommandContext";
import { MoveRight } from "lucide-react";
import React from "react";

const CommandTitle = () => {
  const { setShowCommandBar } = useCommand();

  return (
    <button
      onClick={() => setShowCommandBar((prev) => !prev)}
      className="text-md mt-5 hover:bg-zinc-700 hover:cursor-pointer font-bold transition-all duration-300 bg-black text-white p-2 rounded-lg group"
    >
      Pressione{" "}
      <code className="bg-slate-400 text-md group-hover:bg-white group-hover:text-black transition-all duration-300 ease-in-out text-black rounded-lg px-2 py-1">
        ctrl
      </code>{" "}
      <code className="bg-slate-400 text-md group-hover:bg-white group-hover:text-black transition-all duration-300 ease-in-out text-black rounded-lg px-2 py-1">
        K
      </code>{" "}
      para iniciar <MoveRight size={20} className="inline ml-1" />
    </button>
  );
};

export default CommandTitle;
