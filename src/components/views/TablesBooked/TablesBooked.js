import 'react';
import React from 'react';
import styles from './TablesBooked.module.scss';
import { useParams } from 'react-router-dom';



function TablesBooked() {
  const {id} = useParams();
  return (
    <div className={styles.component}>
      <h2> Tables booked </h2>
      <h3>Table number: {id}</h3>
    </div>
  );
}

export default TablesBooked;