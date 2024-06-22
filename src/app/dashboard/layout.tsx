'use client'

import "@/styles/globals.css";
import Sidebar from "@/components/layout/sidebar";
import Body from "@/components/layout/body";
import { useState } from "react";
import React from "react";
import Header from "@/components/layout/header";
import { DashboardStateProvider } from "@/app/dashboard/_context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashboardStateProvider>
      <div className="flex flex-row flex-1 p-4 gap-4">
        <Sidebar />
        <div className="flex flex-col flex-1 w-full h-full gap-4">
          <Header />
          <Body>
            {children}
          </Body>
        </div>
      </div>
    </DashboardStateProvider>
  );
}
