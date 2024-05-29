"use client";
import { useCommand } from "@/contexts/CommandContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

const NAV_HEADER = [
  { name: "Sobre", path: "/sobre" },
  { name: "Setup", path: "/setup" },
];

const Header = () => {
  const pathname = usePathname();
  const { setShowCommandBar } = useCommand();

  return (
    <header
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
        position: "fixed",
        top: "4",
        padding: "16px",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
    >
      <div className="relative w-10 h-10">
        <Link href="/">
          <Image
            className="w-8 h-8 object-cover bg-center  cursor-pointer"
            src="/bracet.png"
            alt="Logo"
            priority
            layout="fill"
          />
        </Link>
      </div>
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
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Interface / Command">
            <path
              id="Vector"
              d="M9 15V18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15H9ZM9 15H15M9 15V9M15 15V18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15H15ZM15 15V9M15 9H9M15 9V6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9H15ZM9 9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H9Z"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
    </header>
  );
};

export default Header;
