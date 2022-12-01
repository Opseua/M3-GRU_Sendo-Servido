import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';

import Rota1Listar from './Rota1Listar';
import Rota1Adicionar from './Rota1Adicionar';
import Rota1Detalhar from './Rota1Detalhar';
import Rota1Editar from './Rota1Editar';

function App() {
  return (
    <div id="App" className="App">
      <h1 id="Titulo" className="Titulo">IMOBILIARIA | Nome aqui</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Rota1Listar />}></Route>
          <Route path='/rota_1/adicionar' element={<Rota1Adicionar />}></Route>

          <Route path='/rota_1/detalhar/:Rota1id' element={<Rota1Detalhar />}></Route>
          <Route path='/rota_1/editar/:Rota1id' element={<Rota1Editar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
