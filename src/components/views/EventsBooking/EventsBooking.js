import 'react';
import React from 'react';
import styles from './EventsBooking.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';

const demoContent = [
  {people:'6', date: '2021-01-28', time: '15:00', name:'Marcel Smith', phone: '608765373'},

];

const EventsBooking = () => {
  const {id} = useParams();

  return (
    <Paper>
      <div className={styles.component}>
        <h2> Events reservation</h2>
        <h3>Table number: {id}</h3>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>people</TableCell>
            <TableCell>Phone number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.name}>
              <TableCell>
                {row.name}
              </TableCell>
              <TableCell>
                {row.date}
              </TableCell>
              <TableCell>
                {row.time}
              </TableCell>
              <TableCell>
                {row.people}
              </TableCell>
              <TableCell>
                {row.phone}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button>Edit</Button>
    </Paper>
  );

};

export default EventsBooking;