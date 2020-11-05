import 'react';
import React from 'react';
import styles from './Login.module.scss';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';




function Login() {
  return (
    <div className={styles.component}>
      <h2> Login view </h2>
      <TextField 
        id="standard-basic" 
        label="Login" 
        variant="outlined"/>
      <TextField 
        id="standard-password-input"
        label="password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
      <Button className={styles.button}  variant="contained" color="primary">
          Log in
      </Button>
    </div>
  );
}

export default Login;