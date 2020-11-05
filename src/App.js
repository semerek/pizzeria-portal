import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Home from './components/views/Home/Home';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import EventsBooking from './components/views/EventsBooking/EventsBooking';
import EventsBookingNew from './components/views/EventsBookingNew/EventsBookingNew';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import { StylesProvider } from '@material-ui/core/styles';



function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />  
            <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />  
            <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />  
            <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBooking} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookingNew} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={EventsBooking} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={EventsBookingNew} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} /> 
            <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:orderId'} component={WaiterOrder} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrderNew} />
          </Switch>
        </MainLayout>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
