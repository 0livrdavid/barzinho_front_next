import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar";
import Body from "@/components/layout/body";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barzinho App",
  description: "Barzinho app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex h-screen`}>
        <Sidebar />
        <Body>{children}</Body>
      </body>
    </html>
  );
}
