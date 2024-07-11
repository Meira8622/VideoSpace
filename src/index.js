import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from "./routes"
import { GlobalProvider } from './context/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <AppRoutes/>
    </GlobalProvider>
  </React.StrictMode>
);

