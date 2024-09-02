import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App'; // Verifique se este caminho está correto
import './index.css';
import { ProductProvider } from './hooks/useProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>
);
