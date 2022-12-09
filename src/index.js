import React from 'react';
import ReactDOM from 'react-dom/client';

// MARIANA (Home) //
import AppHome from './paginas/AppHome.js';

// BRIAN (Login) //
import AppLogin from './paginas/AppLogin.js';

// ORLANDO (Server) //
import AppServer from './paginas/AppServer.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <AppHome />
    <AppLogin />
    <AppServer />

  </React.StrictMode>
);
