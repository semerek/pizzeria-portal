import 'react';
import React from 'react';
import styles from './TablesBookingNew.module.scss';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';




const TablesBookingNew = () => {
  return (
    <div className={styles.component}>
      <h2> New reservation</h2>
      <List>
        <ListItem>
          <ListItemText>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker/>
            </MuiPickersUtilsProvider>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField
              id="standard-basic" label="Table" variant="filled"/>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField id="standard-basic" label="Amount of people" variant="filled"/>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField id="standard-basic" label="Name" variant="filled"/>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField id="standard-basic" label="Phone number" variant="filled"/>
          </ListItemText>
        </ListItem>

      </List>
    </div>
  );
};

export default TablesBookingNew;