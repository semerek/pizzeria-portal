import 'react';
import React from 'react';
import styles from './TablesBooked.module.scss';
import { useParams } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';


const demoContent = [
  {table: '1', people: '2', date: '2020-10-29', time: '13:30', name:'Marta'},
];


function TablesBooked() {
  const {id} = useParams();
  return (
    <Paper>
      <div className={styles.component}>
        <h2> Tables booked </h2>
        <h3>Table number: {id}</h3>
      </div>
      <Table>
        <TableHead>
          <TableCell>Table</TableCell>
          <TableCell>Amount of people</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Time</TableCell>
          <TableCell>Name</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {demoContent.table}
            </TableCell>
            <TableCell component="th" scope="row">
              {demoContent.people}
            </TableCell>
            <TableCell component="th" scope="row">
              {demoContent.date}
            </TableCell>
            <TableCell component="th" scope="row">
              {demoContent.time}
            </TableCell>
            <TableCell component="th" scope="row">
              {demoContent.name}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button>Edit</Button>
    </Paper>
  );
}

export default TablesBooked;