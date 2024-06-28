'use client'

import { useEffect, useState } from 'react';
import { GetUsers } from '@/api/interfaces/users/get_users';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import getUsers from '@/api/axios/users/get_users';
import EditButtonTableUser from '@/components/page/users/edit_button_table_user';
import { PutUserTable } from '@/api/interfaces/users/put_users';
import { useLoading } from "@rest-hooks/hooks";
import deleteUser from '@/api/axios/users/delete_users';
import { DeleteUserResponse } from '@/api/interfaces/users/delete_users';
import DataTable from '@/components/ui/data-table';
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

type ExtendedColumnDef<T> = ColumnDef<T> & {
  fieldName?: string;
}

export default function TableUsers() {
  const [data, setData] = useState<GetUsers[]>([]);
  const [error, setError] = useState("");

  const columns: ExtendedColumnDef<GetUsers>[] = [
    {
      accessorKey: "id",
      fieldName: "#",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            #
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "name",
      fieldName: "Nome",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nome
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "age",
      fieldName: "Idade",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Idade
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "number",
      fieldName: "Número",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Número
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "valor_reservado_caixa",
      fieldName: "Valor Reservado",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Valor Reservado
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "deleted_at",
      fieldName: "Data Deletado",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Data Deletado
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        return row.getValue("deleted_at") ? new Date(row.getValue("deleted_at")).toLocaleString('pt-BR') : ''
      },
    },
    {
      id: "actions",
      fieldName: "Ações",
      header: "Ações",
      cell: ({ row }) => {
        const user = row.original
   
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ações Copia</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>Copiar ID</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.name)}>Copiar Nome</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.number)}>Copiar Número</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.valor_reservado_caixa.toString())}>Copiar Valor Reservado</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}><EditButtonTableUser user={user} onUpdate={handleUpdateUser}/></DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDeleteUser(row.id)}>Deletar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

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
        setData(users.data as GetUsers[]);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setError(`Erro ao listar usuários: ${error}`);
    }
  };

  useEffect(() => {
    fetchGetUsers();
  }, []);

  const handleUpdateUser = (updatedUser: PutUserTable) => {
    setData((prevData) => {
      const updatedData = prevData.map((row) =>
        row.id === updatedUser.id ? { ...row, ...updatedUser } : row
      );
      return updatedData;
    });
  };

  return (
    <DataTable 
      columns={columns} 
      data={data} 
      title="Usuários" 
      columnFilter="name" 
      columnFilterName="Nome"
    />
  );
}
