import 'react';
import React from 'react';
import styles from './Login.module.scss';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';

const theme = createMuiTheme ({
  palette: {
    primary: {
      main: '#115293',
    },
    secondary: {
      main: '#e33371',
    },
  },
});


function Login() {
  return (
    <ThemeProvider theme={theme}> 
      <div className={styles.component}>
        <h2> Login view </h2>
        <TextField 
          id="standard-basic" 
          label="Login" 
          variant="outlined"
          color="primary"
        />
        <TextField 
          id="standard-password-input"
          label="password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          color="primary"
        />
        <Button className={styles.button}  variant="contained" color="primary" size="large">
            Log in
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default Login;