import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Páginas: Corretores //
import PgCorretoresAdicionar from './PgCorretoresAdicionar';
import PgCorretoresDetalhar from './PgCorretoresDetalhar';
import PgCorretoresEditar from './PgCorretoresEditar';
import PgCorretoresListar from './PgCorretoresListar';

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




function App() {
  return (
    <div id="App" className="App">
      <h1 id="Titulo" className="Titulo">DREAMS IMOBILIÁRIA</h1>
      <BrowserRouter>
        <Routes>
        
          <Route path='/' element={<PgCorretoresListar />}></Route>
          <Route path='/Corretores/adicionar' element={<PgCorretoresAdicionar />}></Route>
          <Route path='/Corretores/detalhar/:id' element={<PgCorretoresDetalhar />}></Route>
          <Route path='/Corretores/editar/:id' element={<PgCorretoresEditar />}></Route>

          <Route path='/ImovelResidencial/listar' element={<PgImovelResidencialListar />}></Route>
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
