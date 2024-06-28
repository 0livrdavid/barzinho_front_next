'use client'

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoading } from "@rest-hooks/hooks";
import { PutUserResponse } from "@/api/interfaces/users/put_users";
import putUsers from "@/api/axios/users/put_users";
import { Input as InputMask } from "@/components/input-mask";
import { FC } from "react";
import { PutUserTable } from '@/api/interfaces/users/put_users';

interface EditButtonTableUserProps {
  user: PutUserTable;
  onUpdate: (updatedUser: PutUserTable) => void;
}

const EditButtonTableUser: FC<EditButtonTableUserProps> = ({ user, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState(user.name);
  const [number, setNumber] = useState(user.number);
  const [age, setAge] = useState(user.age);
  const [valor_reservado_caixa, setValorReservadoCaixa] = useState(user.valor_reservado_caixa);

  const [handleUpdateUser, isLoadingUpdateUser] = useLoading(async () => {
    setError("");

    if (!name || !number || age < 16) {
      setError("Nome, número são obrigatórios e a idade deve ser maior que 16.");
      return;
    }

    const response: PutUserResponse = await putUsers({
      name,
      number,
      age,
      valor_reservado_caixa,
    }, user.id);

    if (response.success) {
      onUpdate({
        id: user.id,
        name,
        number,
        age,
        valor_reservado_caixa,
      });
      setIsOpen(false);
    }
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <p>Editar</p>
      </DialogTrigger>
      <DialogContent className="md:max-w-lg">
        <DialogHeader>
          <DialogTitle>Atualizar Usuário</DialogTitle>
          <DialogDescription>
            Clique no botão abaixo para atualizar o usuário.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <form className="space-y-2">
              <Label htmlFor="name" className="sr-only">Nome Completo</Label>
              <Input 
                id="name" 
                placeholder="Nome Completo" 
                value={name} 
                onChange={(e) => setName(e.target.value)} />
              <Label htmlFor="number" className="sr-only">Nmero</Label>
              <InputMask 
                id="number" 
                mask="(99) 99999-9999" 
                placeholder="Número" 
                value={number} 
                onChange={(e) => setNumber(e.target.value)} />
              <Label htmlFor="age" className="sr-only">Idade</Label>
              <Input 
                id="age" 
                placeholder="Idade" 
                type="number" 
                min="16"
                max="35"
                value={age} 
                onChange={(e) => setAge(Number(e.target.value))} />
              <Label htmlFor="valor_reservado_caixa" className="sr-only">Valor Reservado</Label>
              <Input 
                id="valor_reservado_caixa" 
                placeholder="Valor Reservado" 
                type="number" 
                value={valor_reservado_caixa} 
                onChange={(e) => setValorReservadoCaixa(Number(e.target.value))} />
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="destructive">Fechar</Button>
          </DialogClose>
          <Button onClick={handleUpdateUser} className="primary">
            {isLoadingUpdateUser ? 'Atualizando...' : 'Atualizar'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditButtonTableUser;
