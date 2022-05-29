import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import shopReducer from './reducers/shopReducer';
import { Provider } from 'react-redux';

let initialState = [
  {
    id: 1,
    name: 'Shop1',
    area: 'Thane',
    category: 'Grocery',
    openDate: '01/01/22',
    closeDate: '31/01/22',
  },
  {
    id: 2,
    name: 'Shop2',
    area: 'Pune',
    category: 'Butcher',
    openDate: '01/01/22',
    closeDate: '31/01/22',
  },
  {
    id: 3,
    name: 'Shop3',
    area: 'Mumbai',
    category: 'Baker',
    openDate: '01/01/22',
    closeDate: '31/01/22',
  },
  {
    id: 4,
    name: 'Shop4',
    area: 'Nashik',
    category: 'Chemist',
    openDate: '01/01/22',
    closeDate: '31/01/22',
  },
  {
    id: 5,
    name: 'Shop5',
    area: 'Nagpur',
    category: 'Stationary',
    openDate: '01/01/22',
    closeDate: '31/01/22',
  },
  {
    id: 6,
    name: 'Shop6',
    area: 'Ahmednagar',
    category: 'Grocery',
    openDate: '01/01/22',
    closeDate: '31/01/22',
  },
  {
    id: 7,
    name: 'Shop7',
    area: 'Solapur',
    category: 'Butcher',
    openDate: '01/01/22',
    closeDate: '31/01/22',
  },
];

if (localStorage.getItem('shops') === null)
  localStorage.setItem('shops', JSON.stringify(initialState));
else initialState = JSON.parse(localStorage.getItem('shops'));

const store = createStore(shopReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
