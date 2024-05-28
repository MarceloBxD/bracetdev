// Import the Lucide icons
import { Calendar, User } from "lucide-react";
import React, { useEffect, useRef } from "react";
// Import the command components
import {
  Command as Cmd,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useCommand } from "@/contexts/CommandContext";

const DATA_SUGGESTIONS = [
  {
    icon: Calendar,
    name: "Calendar",
    shortcut: "⌘C",
  },
  {
    icon: User,
    name: "Profile",
    shortcut: "⌘P",
  },
];

const Command = () => {
  const commandRef = useRef(null);
  const { showCommandBar, setShowCommandBar } = useCommand();

  // quando o usuário clicar fora do componente, o componente deve ser fechado

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (commandRef.current && !commandRef.current.contains(event.target)) {
        setShowCommandBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Cmd
      ref={commandRef}
      className="rounded-lg border shadow-md bg-black max-h-[300px] max-w-[400px]"
    >
      <CommandInput
        autoFocus
        className="text-white"
        placeholder="Type a command or search..."
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem className="group ">
            <Calendar className="mr-2 h-4 w-4 text-white group-hover:text-black" />
            <span className="text-white group-hover:text-black">Calendar</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem className="group">
            <User className="mr-2 h-4 w-4 text-white group-hover:text-black" />
            <span className="text-white group-hover:text-black">Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Cmd>
  );
};

export default Command;
