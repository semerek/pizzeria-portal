import 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './WaiterOrder.module.scss';


{/*const demoContent = [
  {id: '1', table: '4', menu:'mexican fiesta', price:'23$'},
  {id: '2', table: '3', menu:'italian snacks', price:'55$'},
  {id: '3', table: '2', menu:'greek brunch', price:'23$'},
]; */}

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