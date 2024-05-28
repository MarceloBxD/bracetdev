import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// CommandProvider import
import { CommandProvider, useCommand } from "@/contexts/CommandContext";
import { Command, SocialMedias, Header } from "../../components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcelo Bracet // Home",
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
        <body className={inter.className}>
          <Header />
          {children}
          <SocialMedias />
        </body>
      </html>
    </CommandProvider>
  );
}
