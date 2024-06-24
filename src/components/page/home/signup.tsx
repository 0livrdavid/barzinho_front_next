'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import HrSign from "@/components/hr_text"
import postUsers from "@/api/axios/users/post_users";
import { useLoading } from '@rest-hooks/hooks';
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Input as InputMask } from "@/components/input-mask";

export default function Signup({ 
    sign, setSign
  }:{ 
    sign: boolean,
    setSign: (sign: boolean) => void
  }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(16);
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  const [handleSignup, isLoadingSignup] = useLoading(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    if (!name || !age || !number) {
      setError('Nome, idade e telefone são obrigatórios');
      return;
    }
  
    try {
      const result = await postUsers({
        name: name,
        number: number,
        password_hash: "123456",
        age: age,
        valor_reservado_caixa: 0,
      });
  
      if (!result || !result.success) {
        setError(result.message);
      } else {
        setSign(true);
      }
    } catch (error) {
      setError(`Um erro ocorreu durante o cadastro: ${error}`);
    }

  })

  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <div className="block w-1/2 mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Criar uma Conta<ModeToggle className="ml-2"/></h1>
          <p className="text-gray-500 dark:text-gray-400">Entre com suas informaçes para começar.</p>
        </div>
        <div className="space-y-4 rounded-lg bg-background p-6 shadow-lg transition-all duration-500 ease-in-out ">
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Idade</Label>
                <Input id="age" type="number" min={16} max={35} defaultValue={age} required value={age} onChange={(e) => setAge(Number(e.target.value))} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="number">Telefone</Label>
                <InputMask mask="(99) 99999-9999" value={number} onChange={(e) => setNumber(e.target.value)} id="number" required />
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button className="w-full">
              {isLoadingSignup ? 'Criando...' : 'Criar Conta'}
            </Button>
            <HrSign text="Já possui uma conta?" />
            <Button onClick={() => setSign(true)} className="w-full" variant="outline">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
