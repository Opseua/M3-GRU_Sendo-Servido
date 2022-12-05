import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Páginas: Corretores //
import corretoreslistar from '../src/paginas/corretoreslistar';
import corretordetalhar from '../src/paginas/corretordetalhar';
import corretoreditar from '../src/paginas/corretoreditar';
import corretoradicionar from '../src/paginas/corretoradicionar';

// Páginas: Formas de pagamento //
import formasdepagamentolistar from '../src/paginas/formasdepagamentolistar';
import formadepagamentodetalhar from '../src/paginas/formadepagamentodetalhar';
import formadepagamentoeditar from '../src/paginas/formadepagamentoeditar';
import formadepagamentoadicionar from '../src/paginas/formadepagamentoadicionar';

// Páginas: Imóveis Comerciais //
import imoveiscomerciaislistar from '../src/paginas/imoveiscomerciaislistar';
import imovelcomercialdetalhar from '../src/paginas/imovelcomercialdetalhar';
import imovelcomercialeditar from '../src/paginas/imovelcomercialeditar';
import imovelcomercialadicionar from '../src/paginas/imovelcomercialadicionar';

// Páginas: Imóveis Residenciais //
import imoveisresidenciaislistar from '../src/paginas/imoveisresidenciaislistar';
import imovelresidencialdetalhar from '../src/paginas/imovelresidencialdetalhar';
import imovelresidencialeditar from '../src/paginas/imovelresidencialeditar';
import imovelresidencialadicionar from '../src/paginas/imovelresidencialadicionar';

// Páginas: Imóveis Residenciais //
import inquilinoslistar from '../src/paginas/inquilinoslistar';
import inquilinodetalhar from '../src/paginas/inquilinodetalhar';
import inquilinoeditar from '../src/paginas/inquilinoeditar';
import inquilinoadicionar from '../src/paginas/inquilinoadicionar';




// ROTAS //
function App() {
  return (
    <div id="App" className="App">
      <h1 id="Titulo" className="Titulo">DREAMS IMOBILIÁRIA</h1>
      <BrowserRouter>
        <Routes>

          <Route exact path='/corretores/listar' element={<corretoreslistar />}></Route>
          <Route exact path='/corretor/detalhar/:empid' element={<corretordetalhar />}></Route>
          <Route exact path='/corretor/editar/:empid' element={<corretoreditar />}></Route>
          <Route exact path='/corretor/adicionar' element={<corretoradicionar />}></Route>

          <Route exact path='/formas_de_pagamento/listar' element={<formasdepagamentolistar />}></Route>
          <Route exact path='/forma_de_pagamento/detalhar/:empid' element={<formadepagamentodetalhar />}></Route>
          <Route exact path='/forma_de_pagamento/editar/:empid' element={<formadepagamentoeditar />}></Route>
          <Route exact path='/forma_de_pagamento/adicionar' element={<formadepagamentoadicionar />}></Route>

          <Route exact path='/imoveis_comerciais/listar' element={<imoveiscomerciaislistar />}></Route>
          <Route exact path='/imovel_comercial/detalhar/:empid' element={<imovelcomercialdetalhar />}></Route>
          <Route exact path='/imovel_comercial/editar/:empid' element={<imovelcomercialeditar />}></Route>
          <Route exact path='/imovel_comercial/adicionar' element={<imovelcomercialadicionar />}></Route>

          <Route exact path='/imoveis_residenciais/listar' element={<imoveisresidenciaislistar />}></Route>
          <Route exact path='/imovel_residencial/detalhar/:empid' element={<imovelresidencialdetalhar />}></Route>
          <Route exact path='/imovel_residencial/editar/:empid' element={<imovelresidencialeditar />}></Route>
          <Route exact path='/imovel_residencial/adicionar' element={<imovelresidencialadicionar />}></Route>

          <Route exact path='/inquilinos/listar' element={<inquilinoslistar />}></Route>
          <Route exact path='/inquilino/detalhar/:empid' element={<inquilinodetalhar />}></Route>
          <Route exact path='/inquilino/editar/:empid' element={<inquilinoeditar />}></Route>
          <Route exact path='/inquilino/adicionar' element={<inquilinoadicionar />}></Route>


          

        </Routes>
      </BrowserRouter>
    </div >
  );

}

export default App;
