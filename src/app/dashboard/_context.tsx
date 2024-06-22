'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface DashboardStateContextProps {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const DashboardStateContext = createContext<DashboardStateContextProps | undefined>(undefined);

export const DashboardStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState('home');

  return (
    <DashboardStateContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </DashboardStateContext.Provider>
  );
};

export const useDashboardState = (): DashboardStateContextProps => {
  const context = useContext(DashboardStateContext);
  if (context === undefined) {
    throw new Error('useDashboardState must be used within an DashboardStateProvider');
  }
  return context;
};
