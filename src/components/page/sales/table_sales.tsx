'use client'

import { useEffect, useState } from 'react';
import { Sale } from '@/api/interfaces/sales/get_sales';
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
import getSales from '@/api/axios/sales/get_sales';

export default function TableSales() {
  const [rows, setRows] = useState<Sale[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGetSales = async () => {
      try {
        setError("");
        const sales = await getSales();
        setRows(sales.data as Sale[]);
        setError(sales.msg);
      } catch (error) {
        console.error('Error fetching sales:', error);
        setError(`Erro ao listar vendas: ${error}`);
      }
    };

    fetchGetSales();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      <Table>
      <TableCaption>Listagem de Vendas</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Valor Compra</TableHead>
          <TableHead>Valor Venda</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{row.id}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.description}</TableCell>
            <TableCell>{row.buy_value}</TableCell>
            <TableCell>{row.sell_value}</TableCell>
            <TableCell className="text-right">Açoes</TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </div>
  );
}
