import 'react';
import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';



function Waiter () {
  return (
    <div className={styles.component}>
      <h2> Waitres view </h2>
      <ul>
        <li><Link to={process.env.PUBLIC_URL + '/waiter/order/:id'} className={styles.link} activeClassName='active'>Orders</Link></li>
        <li><Link to={process.env.PUBLIC_URL + '/waiter/order/:id/new'} className={styles.link} activeClassName='active'>Orders new</Link></li>
      </ul>
    </div>
  );
}

export default Waiter;