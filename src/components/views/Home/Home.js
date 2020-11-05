import 'react';
import React from 'react';
import styles from './Home.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoStatistics = [
  {id: '1', location:'restaurant', status:'in progress'},
  {id: '2', location:'delivery', status:'done'},
  {id: '3', location:'delivery', status:'done'},
];

const demoBooking = [
  {id:'1', type: 'reservation', time: '13:00', table: '1', people: '2'},
  {id:'2', type: 'reservation', time: '13:30', table: '3', people: '2'},
  {id:'3', type: 'event', time: '14:00', table: '2', people: '10'},
  {id:'4', type: 'reservation', time: '14:30', table: '1', people: '2'},

];

const Home = () => (
  <div className={styles.component}>
    <h2> Statistics </h2>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Listing</TableCell>
            <TableCell>Order type</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoStatistics.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.location}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <h2>Reservation and Events</h2>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Listing</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Amount of people</TableCell>
            <TableCell>Table</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoBooking.map(row => (
            <TableRow key={row.id}>
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell>
                {row.type}
              </TableCell>
              <TableCell>
                {row.time}
              </TableCell>
              <TableCell>
                {row.people}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);


export default Home;