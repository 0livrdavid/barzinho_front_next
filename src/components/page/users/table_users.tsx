'use client'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import getUsers from '@/server/axios/users/get_users';
import { UserData } from '@/server/interface/users';

import { useEffect, useState } from 'react';

export default function TableUsers() {
  const [rows, setRows] = useState<UserData[]>([]);

  useEffect(() => {
    getUsers().then(data => {
      const newRows = data.map(user => ({
				nome: user.nome,
				idade: user.idade,
				valor_reservado: user.valor_reservado, 
				numero: user.numero,
				user_id: user.user_id 
			}));
			setRows(newRows);
    }).catch(error => {
      console.error('Error fetching users:', error);
    });
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Idade</TableCell>
              <TableCell>Número</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell align="right">Valor Reservado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.nome}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nome}
                </TableCell>
                <TableCell align="right">{row.idade}</TableCell>
                <TableCell align="right">{row.numero}</TableCell>
                <TableCell align="right">{row.user_id}</TableCell>
                <TableCell align="right">{row.valor_reservado}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

