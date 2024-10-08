import React from 'react';
import ReactDOM from 'react-dom/client';


import './style.css';
import './index.css';
import './custom_css.css'
import App from './App';
import 'leaflet/dist/leaflet.css'
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <App />
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
