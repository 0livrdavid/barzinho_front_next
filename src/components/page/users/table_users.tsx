'use client'

import { useEffect, useState } from 'react';
import { GetUsers } from '@/api/interfaces/users/get_users';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import getUsers from '@/api/axios/users/get_users';
import EditButtonTable from '@/components/page/users/edit_button_table';
import { PutUserTable } from '@/api/interfaces/users/put_users';
import { useLoading } from "@rest-hooks/hooks";
import deleteUser from '@/api/axios/users/delete_users';
import { DeleteUserResponse } from '@/api/interfaces/users/delete_users';

type GetUsersKeys = keyof GetUsers;

export default function TableUsers({ searchField }: { searchField: GetUsersKeys }) {
  const [rows, setRows] = useState<GetUsers[]>([]);
  const [error, setError] = useState("");
  const [sortField, setSortField] = useState<GetUsersKeys>(searchField);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const [handleDeleteUser, isLoadingDeleteUser] = useLoading(async (userId: string) => {
    setError("");
    const response: DeleteUserResponse = await deleteUser(userId);

    if (response.success) {
      fetchGetUsers();
    } else {
      setError(response.message);
    }
  });

  const fetchGetUsers = async () => {
    try {
      setError("");
      const users = await getUsers();
      if (!users.success) {
        setError(users.message);
      } else {
        setError("");
        setRows(users.data as GetUsers[]);
        sortRows(searchField, 'asc');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setError(`Erro ao listar usuários: ${error}`);
    }
  };

  useEffect(() => {
    fetchGetUsers();
  }, []);

  useEffect(() => {
    sortRows(sortField, sortOrder);
  }, [sortField, sortOrder]);

  const handleUpdateUser = (updatedUser: PutUserTable) => {
    setRows((prevRows) => {
      const updatedRows = prevRows.map((row) =>
        row.id === updatedUser.id ? { ...row, ...updatedUser } : row
      );
      return updatedRows;
    });
  };

  const sortRows = (field: GetUsersKeys, order: 'asc' | 'desc') => {
    const sortedRows = [...rows].sort((a, b) => {
      const aValue = a[field] ?? '';
      const bValue = b[field] ?? '';
      if (aValue < bValue) return order === 'asc' ? -1 : 1;
      if (aValue > bValue) return order === 'asc' ? 1 : -1;
      return 0;
    });
    setRows(sortedRows);
  };

  const handleSort = (field: GetUsersKeys) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
  };

  return (
    <div>
      {error && <div>{error}</div>}
      <Table>
        <TableCaption>Listagem de Usuários</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]" onClick={() => handleSort('id')}>#</TableHead>
            <TableHead onClick={() => handleSort('name')}>Nome</TableHead>
            <TableHead onClick={() => handleSort('age')}>Idade</TableHead>
            <TableHead onClick={() => handleSort('number')}>Número</TableHead>
            <TableHead onClick={() => handleSort('valor_reservado_caixa')}>Valor Reservado</TableHead>
            <TableHead onClick={() => handleSort('deleted_at')}>Data Deletado</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.valor_reservado_caixa}</TableCell>
              <TableCell>{row.deleted_at ? new Date(row.deleted_at).toLocaleString('pt-BR') : ''}</TableCell>
              <TableCell className="flex justify-end gap-2">
                <EditButtonTable 
                  user={row} 
                  onUpdate={handleUpdateUser}
                />
                <Button variant="destructive" size="sm" onClick={() => handleDeleteUser(row.id)}>{isLoadingDeleteUser ? 'Excluindo...' : 'Excluir'}</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
