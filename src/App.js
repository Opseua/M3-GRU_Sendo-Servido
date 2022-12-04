import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Páginas: ImovelResidencial //
import PgImovelResidencialAdicionar from './PgImovelResidencialAdicionar';
import PgImovelResidencialDetalhar from './PgImovelResidencialDetalhar';
import PgImovelResidencialEditar from './PgImovelResidencialEditar';
import PgImovelResidencialListar from './PgImovelResidencialListar';

// Páginas: ImovelComercial //
import PgImovelComercialAdicionar from './PgImovelComercialAdicionar';
import PgImovelComercialDetalhar from './PgImovelComercialDetalhar';
import PgImovelComercialEditar from './PgImovelComercialEditar';
import PgImovelComercialListar from './PgImovelComercialListar';

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
import PgCorretoresAdicionar from './PgCorretoresAdicionar';
import PgCorretoresDetalhar from './PgCorretoresDetalhar';
import PgCorretoresEditar from './PgCorretoresEditar';
import PgCorretoresListar from './PgCorretoresListar';


function App() {
  return (
    <div id="App" className="App">
      <h1 id="Titulo" className="Titulo">IMOBILIARIA | Nome aqui</h1>
      <BrowserRouter>
        <Routes>
        
          <Route path='/' element={<PgImovelResidencialListar />}></Route>
          <Route path='/ImovelResidencial/adicionar' element={<PgImovelResidencialAdicionar />}></Route>
          <Route path='/ImovelResidencial/detalhar/:id' element={<PgImovelResidencialDetalhar />}></Route>
          <Route path='/ImovelResidencial/editar/:id' element={<PgImovelResidencialEditar />}></Route>

          <Route path='/PgImovelComercial/listar' element={<PgImovelComercialListar />}></Route>
          <Route path='/ImovelComercial/adicionar' element={<PgImovelComercialAdicionar />}></Route>
          <Route path='/ImovelComercial/detalhar/:id' element={<PgImovelComercialDetalhar />}></Route>
          <Route path='/PgImovelComercial/editar/:id' element={<PgImovelComercialEditar />}></Route>



        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
