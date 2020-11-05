import 'react';
import React from 'react';
import styles from './TablesBooking.module.scss';
import { useParams } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';


const demoData = [
  {name: 'Alex Nowak', people: '2', date: '2020-10-29', time: '13:30'},
];


const TablesBooking = () => {
  const {id} = useParams();

  return (
    <Paper>
      <div className={styles.component}>
        <h2> Tables reservation</h2>
        <h3>Table number: {id}</h3>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Amount of people</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoData.map(row => (
            <TableRow key={row.name}>
              <TableCell>
                {row.name}
              </TableCell>
              <TableCell>
                {row.people}
              </TableCell>
              <TableCell>
                {row.date}
              </TableCell>
              <TableCell>
                {row.time}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button>Edit</Button>
    </Paper>
  );

};


export default TablesBooking;