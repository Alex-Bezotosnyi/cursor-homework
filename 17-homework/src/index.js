import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <h1>Homework #17: ReactJS. Основи</h1>
    <App />
      <footer className="footer"><h2>Homework #17</h2></footer>
  </React.StrictMode>
);

reportWebVitals();
