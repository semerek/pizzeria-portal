import 'react';
import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Tables.module.scss';


function Tables() {
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
}

export default Tables;