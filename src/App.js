import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Páginas: ImovelResidencial //
import PgImovelResidencialAdicionar from './PgImovelResidencialAdicionar';
import PgImovelResidencialDetalhar from './PgImovelResidencialDetalhar';
import PgImovelResidencialEditar from './PgImovelResidencialEditar';
import PgImovelResidencialListar from './PgImovelResidencialListar';

// Páginas: ImovelComercial //
import PgImovelResidencialAdicionar from './PgImovelResidencialAdicionar';
import PgImovelResidencialDetalhar from './PgImovelResidencialDetalhar';
import PgImovelResidencialEditar from './PgImovelResidencialEditar';
import PgImovelResidencialListar from './PgImovelResidencialListar';

// Páginas: Inquilino //
import PgInquilinoAdicionar from './PgInquilinoAdicionar';
import PgInquilinoDetalhar from './PgInquilinoDetalhar';
import PgInquilinoEditar from './PgInquilinoEditar';
import PgInquilinoListar from './PgInquilinoListar';

// Páginas: FormasDePagamento //
import PgFormasDePagamentoAdicionar from './PgFormasDePagamentoAdicionar';
import PgFormasDePagamentoDetalhar from './PgFormasDePagamentoDetalhar';
import PgFormasDePagamentoEditar from './PgFormasDePagamentoEditar';
import PgFormasDePagamentoListar from './PgFormasDePagamentoListar';

// Páginas: Corretores //
import Rota1Adicionar from './Rota1Adicionar';
import Rota1Detalhar from './Rota1Detalhar';
import Rota1Editar from './Rota1Editar';
import Rota1Listar from './Rota1Listar';


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
