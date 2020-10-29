import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';
import Button from '@material-ui/core/Button';





function PageNav() {
  return (
    <nav className={styles.component}>
      <Button component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} className={styles.link} activeClassName='active'>Home</Button>
      <Button component={NavLink} to={`${process.env.PUBLIC_URL}/login`} className={styles.link} activeClassName='active'>Login</Button>
      <Button component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} className={styles.link} activeClassName='active'>Kitchen</Button>
      <Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} className={styles.link} activeClassName='active'>Tables</Button>
      <Button component={NavLink} to={`${process.env.PUBLIC_URL}/waiter`} className={styles.link} activeClassName='active'>Waiter</Button>
    </nav>
  );
}

export default PageNav;