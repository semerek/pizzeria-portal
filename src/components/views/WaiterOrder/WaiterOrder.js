import 'react';
import React from 'react';
import styles from './WaiterOrder.module.scss';
import Button from '@material-ui/core/Button';
import {Table, TableHead, TableRow, TableCell, TableBody, TableFooter} from '@material-ui/core';
import {Link} from 'react-router-dom';



const menuDemo = [
  {table: '1', menu: 'Nachos con queso', status: 'done', price: '8$' },
  { table: '2', menu: 'Pizza americana', status: 'delivered',  price: '10$' },
  { table: '3', menu: 'Tacos con carne', status: 'ready', price: '12$' },
];

const WaiterOrder = () => {
  return (
    <div className={styles.component}>
      <h2>Ordering view</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>                
            </TableCell>
            <TableCell align="center">Menu</TableCell>
            <TableCell align="center">Table</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menuDemo.map((row) => (
            <TableRow key={row.table}>
              <TableCell align="left">
                <Button variant="contained" size="small" >Edit</Button>
                <Button variant="contained" size="small">Delete</Button>
                <Button variant="contained" size="small">Add</Button>
              </TableCell>
              <TableCell align="center">{`${row.menu}`}</TableCell>
              <TableCell align="center">{`${row.table}`}</TableCell>
              <TableCell align="center" >{`${row.status}`}</TableCell>
              <TableCell align="center" >{`${row.status}`}</TableCell>
              <TableCell align="center" >{`${row.price}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>
              <Button>New Order</Button>       
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};


export default WaiterOrder;