"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import HrSign from "@/components/hr_text"
import React, { useState } from "react"
import { useLoading } from '@rest-hooks/hooks';
import { setToken } from "@/api/axios/users/token"
import signin from "@/api/axios/users/authenticate"
import { useRouter } from "next/navigation";
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Input as InputMask } from "@/components/input-mask";

export default function Sign({
    sign, setSign, 
  }: {
    sign: boolean,
    setSign: (sign: boolean) => void,
  }) {
  const router = useRouter();
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  
  const [handleSignIn, isLoadingSignIn] = useLoading(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const result = await signin({
      number: number,
      password_hash: "123456",
    });

    console.log(result)

    if (result && result.success && result.data) {
      setToken(result.data.token);
      localStorage.setItem('user', JSON.stringify(result.data.user));
      router.push('/dashboard');
    } else {
      setError(result.message);
    }
  });

  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <div className="block w-1/2 mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Barzinho<ModeToggle className="ml-2"/></h1>
          <p className="text-gray-500 dark:text-gray-400">Seja bem-vindo(a), entre para começar a usar.</p>
        </div>
        <div className="space-y-4 rounded-lg bg-background p-6 shadow-lg transition-all duration-500 ease-in-out ">
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="number">Telefone</Label>
              <InputMask mask="(99) 99999-9999" value={number} onChange={(e) => setNumber(e.target.value)} id="number" required />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button className="w-full">
              {isLoadingSignIn ? 'Carregando...' : 'Entrar'}
            </Button>
            <HrSign text="ou" />
            <Button onClick={() => setSign(false)} className="w-full" variant="outline">
              Criar uma Conta
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
