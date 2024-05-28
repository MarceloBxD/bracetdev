import { User, Paperclip, Home, Computer } from "lucide-react";
import React, { useEffect, useRef } from "react";
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
import Link from "next/link";

const GENERAL_SUGGESTIONS = [
  {
    icon: Paperclip,
    name: "Copiar URL",
    shortcut: "⌘C",
  },
];

const NAV_DATA = [
  {
    icon: Home,
    name: "Home",
    shortcut: "⌘H",
    href: "/",
  },
  {
    icon: User,
    name: "Sobre",
    shortcut: "⌘P",
    href: "/sobre",
  },
  {
    icon: Computer,
    name: "Setup",
    shortcut: "⌘S",
    href: "/setup",
  },
];

const Command = () => {
  const commandRef = useRef(null);
  const { setShowCommandBar } = useCommand();

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
      className="rounded-lg shadow-md bg-slate-900 py-2 px-3 bg-opacity-30 backdrop-blur-lg backdrop-filter max-h-[300px] max-w-[500px]"
    >
      <CommandInput
        autoFocus
        className=" text-white rounded-md px-3 py-2 text-sm outline-none placeholder-text-white disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Type a command or search..."
      />
      <CommandList>
        <CommandEmpty
          className="py-6 text-center text-sm text-white"
          aria-live="polite"
        >
          No results found.
        </CommandEmpty>
        <CommandGroup heading="Geral">
          {GENERAL_SUGGESTIONS.map((suggestion) => (
            <CommandItem
              key={suggestion.name}
              className="group cursor-pointer hover:bg-zinc-700"
            >
              <suggestion.icon className="mr-2 h-4 w-4 text-white" />
              <span className="text-white">{suggestion.name}</span>
              <CommandShortcut>{suggestion.shortcut}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator className="mt-2" />
        <CommandGroup heading="Navegação">
          {NAV_DATA.map((nav) => (
            <Link href={nav.href} key={nav.name}>
              <CommandItem className="group cursor-pointer hover:bg-zinc-700 p-2">
                <nav.icon className="mr-2 h-4 w-4 text-white" />
                <span className="text-white">{nav.name}</span>
                <CommandShortcut>{nav.shortcut}</CommandShortcut>
              </CommandItem>
            </Link>
          ))}
        </CommandGroup>
      </CommandList>
    </Cmd>
  );
};

export default Command;
