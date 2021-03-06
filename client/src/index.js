import React from 'react';
import ReactDOM from 'react-dom';
import App from './interface/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import './style/style.css';
import './style/header.css';
import './style/output.css';
import './style/choiceBox.css';
import './style/chartBox.css';
import './style/dashboard.css';
import './style/blockBox.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
