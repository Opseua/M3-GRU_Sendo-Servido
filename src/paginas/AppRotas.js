
// eslint-disable-next-line
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Home //
import AppHome from './AppHome';

// Login //
import AppLogin from './AppLogin';

// Páginas: Corretores //
import CorretoresListar from './CorretoresListar';
import CorretorDetalhar from './CorretorDetalhar';
import CorretorEditar from './CorretorEditar';
import CorretorAdicionar from './CorretorAdicionar';

// Páginas: Formas de pagamento //
import FormasDePagamentoListar from './FormasDePagamentoListar';
import FormaDePagamentoDetalhar from './FormaDePagamentoDetalhar';
import FormaDePagamentoEditar from './FormaDePagamentoEditar';
import FormaDePagamentoAdicionar from './FormaDePagamentoAdicionar';



// Main //
import Main from './Main';




function AppRotas() {
  return (
    <div className="App">
      <header className="App-header">


     <BrowserRouter>
        <Routes>

          <Route exact path='/main' element={<Main />}></Route>

          <Route exact path='/' element={<AppHome />}></Route>

          <Route exact path='/login' element={<AppLogin />}></Route>

          <Route exact path='/corretores/listar' element={<CorretoresListar />}></Route>
          <Route exact path='/corretor/detalhar/:empid' element={<CorretorDetalhar />}></Route>
          <Route exact path='/corretor/editar/:empid' element={<CorretorEditar />}></Route>
          <Route exact path='/corretor/adicionar' element={<CorretorAdicionar />}></Route>

          <Route exact path='/formas_de_pagamento/listar' element={<FormasDePagamentoListar />}></Route>
          <Route exact path='/forma_de_pagamento/detalhar/:empid' element={<FormaDePagamentoDetalhar />}></Route>
          <Route exact path='/forma_de_pagamento/editar/:empid' element={<FormaDePagamentoEditar />}></Route>
          <Route exact path='/forma_de_pagamento/adicionar' element={<FormaDePagamentoAdicionar />}></Route>
      

        </Routes>
      </BrowserRouter>


      </header>
    </div>
  );
}

export default AppRotas;
