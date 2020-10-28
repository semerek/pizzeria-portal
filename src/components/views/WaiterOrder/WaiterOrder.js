import 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './WaiterOrder.module.scss';



function WaiterOrder() {
  const {id} = useParams();
  return (
    <div className={styles.component}>
      <h2> Orders </h2>
      <h3>Order number: {id}</h3>
    </div>
  );
}

export default WaiterOrder;