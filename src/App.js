import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Home from './components/views/Home/Home';
import TablesBooked from './components/views/TablesBooked/TablesBooked';
import TablesBookedNew from './components/views/TablesBookedNew/TablesBookedNew';
import EventsBooked from './components/views/EventsBooked/EventsBooked';
import EventsBookedNew from './components/views/EventsBookedNew/EventsBookedNew';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import { StylesProvider } from '@material-ui/core/styles';



function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/panel`} component={Home} />
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />  
            <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />  
            <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />  
            <Route exact path={process.env.PUBLIC_URL + '/tables/booked/:id'} component={TablesBooked} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookedNew} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={EventsBooked} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={EventsBookedNew} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} /> 
            <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrder} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrderNew} />
          </Switch>
        </MainLayout>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
