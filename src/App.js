import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';

import Rota_1_Listar from './Rota_1_Listar';
import Rota_1_Adicionar from './Rota_1_Adicionar';
import Rota_1_Detalhar from './Rota_1_Detalhar';
import Rota_1_Editar from './Rota_1_Editar';

function App() {
  return (
    <div className="App">
      <h1>IMOBILIARIA | Nome aqui</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Rota_1_Listar />}></Route>
          <Route path='/rota_1/adicionar' element={<Rota_1_Adicionar />}></Route>

          <Route path='/rota_1/detalhar/:rota_1_id' element={<Rota_1_Detalhar />}></Route>
          <Route path='/rota_1/editar/:rota_1_id' element={<Rota_1_Editar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
