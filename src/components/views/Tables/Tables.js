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
  {time: '13:00', id: '1', type: 'reservation'},
  {time: '13:30', id: '2', type: 'reservation'},
  {time: '14:00', id: '3', type: 'reservation'},
  {time: '14:00', id: '4', type: 'event'},

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
    <h2>Tables bookings</h2>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker/>
    </MuiPickersUtilsProvider>
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
              <TableCell>
                {renderActions(row.type, row.id)}
              </TableCell>
              <TableCell>
                {renderActions(row.type, row.id)}
              </TableCell>
              <TableCell>
                {renderActions(row.type, row.id)}
              </TableCell>
              <TableCell>
                {renderActions(row.type, row.id)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

{/* function Tables() {
  return (
    <div className={styles.component}>
      <h2> Tables view </h2>
      <ul>
        <li><Link to={process.env.PUBLIC_URL + '/tables/booking/:id'} className={styles.link} activeClassName='active'>Tables booked</Link></li>
        <li><Link to={process.env.PUBLIC_URL + '/tables/booking/new'} className={styles.link} activeClassName='active'>Tables booked new</Link></li>
        <li><Link to={process.env.PUBLIC_URL + '/tables/events/:id'} className={styles.link} activeClassName='active'>Events booked</Link></li>
        <li><Link to={process.env.PUBLIC_URL + '/tables/events/new'} className={styles.link} activeClassName='active'>Tables booked new</Link></li>
      </ul>
    </div>
  );
} */}

export default Tables;