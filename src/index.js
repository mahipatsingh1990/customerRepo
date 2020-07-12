import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './App.css';

import Customers from './modules/customers';
import CustomerDetails from './modules/customerDetails';
import store from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <Customers />
    <CustomerDetails />
  </Provider>,
  document.getElementById('root')
);