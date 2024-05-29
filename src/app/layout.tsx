import type { Metadata } from "next";
import { Edu_TAS_Beginner, Inter } from "next/font/google";
import "./globals.css";

// CommandProvider import
import { CommandProvider } from "@/contexts/CommandContext";
import Header from "../../components/Header";
import SocialMedias from "../../components/SocialMedias";

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
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Marcelo Bracet" />
        <meta name="application-name" content="Bracet Presentation" />
        <meta name="language" content="pt-br" />
        <meta name="theme-color" content="#000000" />

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <CommandProvider>
          <Header />
          {children}

          <SocialMedias />
        </CommandProvider>
      </body>
    </html>
  );
}
