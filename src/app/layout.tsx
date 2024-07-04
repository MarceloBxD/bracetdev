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
        <meta
          name="description"
          content="A simple, modern, and fast portfolio"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="keywords" content="portfolio, developer, web" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="generator" content="Bracet Presentation" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Marcelo Bracet" />
        <meta name="application-name" content="Bracet Presentation" />
        <meta name="language" content="pt-br" />
        <meta name="theme-color" content="#000000" />

        <link rel="icon" href="/bracet.png" />
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
