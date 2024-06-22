'use client'

import React from 'react';
import { getToken, removeToken } from '@/api/axios/users/token';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import signout from '@/api/axios/users/signout';
import { useLoading } from '@rest-hooks/hooks';
import { SignoutResponse } from '@/api/interfaces/users/signout';
import { useDashboardState } from '@/app/dashboard/_context';
import { ModeToggle } from "@/components/ui/mode-toggle";
import Spinner from 'react-bootstrap/Spinner';

export default function Header() {
  const router = useRouter();
  const { activePage } = useDashboardState();
  const [namePage, setNamePage] = useState('');
  let userName = JSON.parse(localStorage.getItem('user') || '{}').name || 'Nome Usuário';

  const [handleSignOut, isLoadingSignOut] = useLoading(async () => {
      const token = await getToken()
      if (token) {
        const result: SignoutResponse = await signout(token);

        if (result && result.success) {
          removeToken()
          localStorage.clear()
        } else {
          console.error(result.msg)
        }
      }
      router.push('/');
  });

  useEffect(() => {
    let pageName;
    switch (activePage) {
      case 'sales':
        pageName = "Vendas";
        break;
      case 'users':
        pageName = "Usuários";
        break;
      case 'products':
        pageName = "Produtos";
        break;
      case 'reports':
        pageName = "Relatórios";
        break;
      default:
        pageName = "Dashboard";
    }
    setNamePage(pageName);
  }, [activePage]);  

  return (
    <div className="flex flex-row justify-between items-center p-8 h-4 w-full rounded-lg border border-border bg-background">
        <h1 className="text-2xl font-bold">{namePage}</h1>
        <div className="flex flex-row gap-4 items-center">
          <p>{userName}</p>
          <ModeToggle/>
          <Button onClick={handleSignOut} variant="destructive" size="icon">
                          {isLoadingSignOut ? 
              <Spinner animation="border" variant="light" /> : 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>}
          </Button>
        </div>
    </div>
  );
}



