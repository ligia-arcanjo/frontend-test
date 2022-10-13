import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import FilmsProvider from './context/FilmsProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilmsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilmsProvider>
  </React.StrictMode>,
);
