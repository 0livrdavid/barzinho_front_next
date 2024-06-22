'use client'

import { useEffect, useState } from 'react';
import { User } from '@/api/interfaces/users/post_users';
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import getUsers from '@/api/axios/users/get_users';

export default function TableUsers() {
  const [rows, setRows] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGetUsers = async () => {
      try {
        setError("");
        const users = await getUsers();
        setRows(users.data as User[]);
        setError(users.msg);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError(`Erro ao listar usuários: ${error}`);
      }
    };

    fetchGetUsers();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      <Table>
      <TableCaption>Listagem de Usuários</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Idade</TableHead>
          <TableHead>Número</TableHead>
          <TableHead>Valor Reservado</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{row.id}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.age}</TableCell>
            <TableCell>{row.number}</TableCell>
            <TableCell className="text-right">{row.valor_reservado_caixa}</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </div>
  );
}
