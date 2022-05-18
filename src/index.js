import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0Rx6cJ4FMqaUI-6eJKCqetTxkfB71tt8",
  authDomain: "funkos-ecommerce-ulla.firebaseapp.com",
  projectId: "funkos-ecommerce-ulla",
  storageBucket: "funkos-ecommerce-ulla.appspot.com",
  messagingSenderId: "125760417630",
  appId: "1:125760417630:web:db3c346ed0541276c129cf"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
