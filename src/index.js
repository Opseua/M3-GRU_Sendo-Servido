import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style_index.css';

// ROTAS //
import Rotas from './rotas/Rotas.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);


