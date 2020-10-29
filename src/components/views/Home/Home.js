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
  {id: '1', location:'restaurant', type:'reservation', time:'12:30'},
  {id: '2', location:'delivery', type:'event', time:'12:30'},
  {id: '4', location:'delivery', type:'event', time:'15:30'},
  {id: '5', location:'restaurant', type:'reservation', time:'12:30'},

];

const Home = () => (
  <div className={styles.component}>
    <h2> Home view </h2>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Restauarnt orders</TableCell>
            <TableCell>Delivery orders</TableCell>
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
              <Table>
                {row.type}
              </Table>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);


export default Home;