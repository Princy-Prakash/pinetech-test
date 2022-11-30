import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './TabPanel.css'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData(1, 159, 6.0, 'active'),
    createData(2, 237, 9.0,'inactive' ),
    createData(3, 262, 16.0, 'active' ),
    createData(4, 305, 3.7,'inactive' ),
    createData(5, 356, 16.0,'active'  ),
  ];
const TabPanel2 = () => {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell  align="center">Inventory Id</TableCell>
          <TableCell align="center">Product Id</TableCell>
          <TableCell align="center">Capacity of product</TableCell>
          <TableCell align="center">Status</TableCell> 
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell  align="center" component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="center">{row.calories}</TableCell>
            <TableCell align="center">{row.fat}</TableCell>
            <TableCell align="center">{row.carbs}</TableCell> 
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default TabPanel2
