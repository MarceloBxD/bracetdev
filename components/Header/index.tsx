"use client";
import { useCommand } from "@/contexts/CommandContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CommandIcon from "../../components/CommandIcon";
import React from "react";

const NAV_HEADER = [
  { name: "Sobre", path: "/sobre" },
  { name: "Setup", path: "/setup" },
];

const Header = () => {
  const pathname = usePathname();
  const { setShowCommandBar } = useCommand();

  return (
    <header className="flex w-full justify-between items-center text-white fixed top-4 px-4">
      <Link href="/">
        <div>Logo</div>
      </Link>
      <nav className="flex gap-2">
        {NAV_HEADER.map((nav) => (
          <a
            href={nav.path}
            key={nav.name}
            className={cn(
              "hover:bg-white text-md text-gray-500 transition-all duration-300 relative hover:text-black px-2 py-1 rounded-md",
              pathname === nav.path
                ? "after:content-[''] after:text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:rounded-t-md after:rounded-b-md after:z-[-1]"
                : ""
            )}
          >
            {nav.name}
          </a>
        ))}
      </nav>
      <button
        className="flex justify-center items-center  rounded-md p-2"
        onClick={() => setShowCommandBar((prev) => !prev)}
      >
        <CommandIcon />
      </button>
    </header>
  );
};

export default Header;
