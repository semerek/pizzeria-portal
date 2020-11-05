import 'react';
import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Tables.module.scss';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

const demoContent = [
  {time: '13:00', tables: [
    {
      id: 'table-1',
      type: 'reservation',
    },
    {
      id: 'table-2',
    },
    {
      id: 'table-3',
      type: 'event',
    },
    {
      id: 'table-4',
    },
  ]},
  {time: '13:30', tables: [
    {
      id: 'table-1',
    },
    {
      id: 'table-2',
      type: 'reservation',

    },
    {
      id: 'table-3',
      type: 'event',
    },
    {
      id: 'table-4',
    },
  ]},
  {time: '14:00', tables: [
    {
      id: 'table-1',
      type: 'reservation',
    },
    {
      id: 'table-2',
      type: 'event',

    },
    {
      id: 'table-3',
      type: 'event',
    },
    {
      id: 'table-4',
    },
  ]},
  {time: '14:30', tables: [
    {
      id: 'table-1',
    },
    {
      id: 'table-2',
    },
    {
      id: 'table-3',
      type: 'reservation',
    },
    {
      id: 'table-4',
      type: 'event',

    },
  ]},
];

const renderActions = (type, id) => {
  switch (type) {
    case 'reservation':
      return ( <Button component ={Link} to={process.env.PUBLIC_URL +'/tables/booking/'+ id}>Reservation</Button>
      );
    case 'event':
      return (
        <Button component ={Link} to={process.env.PUBLIC_URL +'/tables/events/'+ id}>Event</Button>
      );
    default: 
      return null;
  }
};

const Tables = () => (

  <div className={styles.component}>
    <h2>Tables booking view</h2>
    <form className={styles.form}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker/>
      </MuiPickersUtilsProvider>
      <Button className={styles.button} component={Link} to={process.env.PUBLIC_URL +'/tables/events/new'}>New event</Button> 
      <Button className={styles.button} component={Link} to={process.env.PUBLIC_URL +'/tables/bookings/new'}>New reservation</Button>
    </form>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.time}>
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              {row.tables.map (table => (
                <TableCell key={table.id}>
                  {renderActions(table.type, table.id)} 
                </TableCell>
              ))}
            </TableRow>  
          ))}     
        </TableBody>
      </Table>
    </Paper>
  </div>
);


export default Tables;