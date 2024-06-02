import { User, Paperclip, Home, Computer } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
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
  const commandRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const { showCommandBar, setShowCommandBar } = useCommand();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.toString());
    alert("URL copiada para a área de transferência!");
  };

  useEffect(() => {
    console.log(showCommandBar);
  }, [showCommandBar, setShowCommandBar]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        commandRef.current &&
        event.target instanceof Node &&
        !commandRef.current.contains(event.target)
      ) {
        setShowCommandBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [commandRef, setShowCommandBar]);

  return (
    <Cmd
      ref={commandRef}
      className="absolute w-2/3 md:w-1/2 h-fit md:h-1/3 left-[50%] -translate-x-[50%] top-[10%] bg-black bg-opacity-90 z-50 flex flex-col justify-start items-start p-4 overflow-y-auto"
    >
      <CommandInput
        autoFocus
        className=" text-white w-full rounded-md px-3 py-2 text-sm outline-none placeholder-text-white disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Type a command or search..."
      />
      <CommandList>
        <CommandEmpty
          className="py-6 text-center text-sm text-white"
          aria-live="polite"
        >
          No results found.
        </CommandEmpty>
        <CommandGroup heading="Navegação">
          {NAV_DATA.map((nav) => (
            <Link
              onClick={() => {
                setShowCommandBar(false);
              }}
              href={nav.href}
              key={nav.name}
            >
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
