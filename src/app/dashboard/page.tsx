'use client'

import React from "react";
import SalesPage from "@/app/dashboard/_sales";
import UsersLayout from "@/app/dashboard/_users";
import ProductsPage from "@/app/dashboard/_products";
import ReportsPage from "@/app/dashboard/_reports";
import { useEffect, useState } from "react";
import { useDashboardState } from '@/app/dashboard/_context';

export default function Dashboard() {
  const { activePage } = useDashboardState();
  const [renderedPage, setRenderedPage] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const renderPage = () => {
      switch (activePage) {
        case 'sales':
          return <SalesPage />;
        case 'users':
          return <UsersLayout />;
        case 'products':
          return <ProductsPage />;
        case 'reports':
          return <ReportsPage />;
        default:
          return <ReportsPage />;
      }
    };

    setRenderedPage(renderPage());
  }, [activePage]);

  return (
      <>
        {renderedPage}
      </>
  )
}