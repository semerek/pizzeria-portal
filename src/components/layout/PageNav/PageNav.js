import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';




function PageNav() {
  return (
    <nav className={styles.component}>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} className={styles.link} activeClassName='active'>Home</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} className={styles.link} activeClassName='active'>Login</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} className={styles.link} activeClassName='active'>Kitchen</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables`} className={styles.link} activeClassName='active'>Tables</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/waiter`} className={styles.link} activeClassName='active'>Waiter</NavLink>
    </nav>
  );
}

export default PageNav;