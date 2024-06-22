import type { Metadata } from "next";
import "@/styles/globals.css";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )} flex h-screen`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <div className="flex flex-row w-full h-full flex-1 p-4 gap-4">
            {children}
          </div>
        </ThemeProvider>
      </body>      
    </html>
  );
}
