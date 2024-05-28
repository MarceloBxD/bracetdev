"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex w-full justify-between items-center text-white fixed top-4 px-4">
      <div>Logo</div>
      <nav className="flex gap-2">
        <p className="cursor-pointer relative hover:bg-zinc-700 px-3 py-2 rounded-md transition-all duration-300 ease-in-out">
          Sobre
          <span className="absolute top-0 left-0 w-full h-full bg-zinc-700 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
        </p>
        <p className="cursor-pointer hover:bg-zinc-700 px-3 py-2 rounded-md transition-all duration-300 ease-in-out ">
          About
        </p>
      </nav>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
