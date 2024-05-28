import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// CommandProvider import
import { CommandProvider } from "@/contexts/CommandContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bracet",
  description: "A simple, modern, and fast portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CommandProvider>
      <html lang="pt-br">
        <body className={inter.className}>{children}</body>
      </html>
    </CommandProvider>
  );
}
