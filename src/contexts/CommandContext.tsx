"use client";

import React, { createContext, useContext, useState } from "react";

type CommandContextType = {
  showCommandBar: boolean;
  setShowCommandBar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CommandContext = createContext<CommandContextType>({
  showCommandBar: false,
  setShowCommandBar: () => {},
});

export const CommandProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [showCommandBar, setShowCommandBar] = useState(false);

  return (
    <CommandContext.Provider value={{ showCommandBar, setShowCommandBar }}>
      {children}
    </CommandContext.Provider>
  );
};

export const useCommand = () => {
  const context = useContext(CommandContext);
  if (!context) {
    throw new Error("useCommand must be used within a CommandProvider");
  }
  return context;
};
