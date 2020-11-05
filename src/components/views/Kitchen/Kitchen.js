import 'react';
import React from 'react';
import styles from './Kitchen.module.scss';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const demoContent = [
  {order:'1', table: '1', products: ['Quesadillas, Tacos, Cola'], status: 'received'},
  {order:'2', table: '3', products: ['Burritos, Cola, coffee'], status: 'in progress'},
  {order:'3', table: '4', products: ['Nachos con queso, Martini, Fanta'], status: 'done'},
  {order:'4', table: '3', products: ['Pizza, Beer, Cola'], status: 'in progress'},
];

	
const renderActions = (status) => {
  switch (status) {
    case 'received':
      return (
        <Button>Received</Button>
      );
    case 'in progress':
      return (
        <Button>In progress</Button>
      );
    case 'done':
      return (
        <Button>Done</Button>
      );
    default:
      return null;
  }
};

const Kitchen = () => (
  <div className={styles.component}>
    <h2> Kitchen view </h2>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order</TableCell>
            <TableCell>Table number</TableCell>
            <TableCell>Products</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.order}>
              <TableCell component="th" scope="row">
                {row.order}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.products}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Kitchen;