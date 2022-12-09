import React from 'react';
import ReactDOM from 'react-dom/client';

// MARIANA (Home) //
import AppHome from './AppHome.js';

// ORLANDO (Server) //
import AppServer from './AppServer.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <AppHome />
    <AppServer />
    
  </React.StrictMode>
);
