import 'react';
import React from 'react';
import styles from './EventsBooked.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';

const demoContent = [
  {table: '2', people: '6', date: '2021-01-29', time: '15:00', name:'Alex', phone: '786562544'},
];

function EventsBooked() {
  const {id} = useParams();

  return (
    <Paper>
      <div className={styles.component}>
        <h2> Events booked </h2>
        <h3>Table number: {id}</h3>
      </div>
      <Table>
        <TableHead>
          <TableCell>Table</TableCell>
          <TableCell>Amount of people</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Time</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Phone number</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {demoContent.table}
            </TableCell>
            <TableCell>
              {demoContent.people}
            </TableCell>
            <TableCell>
              {demoContent.date}
            </TableCell>
            <TableCell>
              {demoContent.time}
            </TableCell>
            <TableCell>
              {demoContent.name}
            </TableCell>
            <TableCell>
              {demoContent.phone}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button>Edit</Button>
    </Paper>
  );

}

export default EventsBooked;