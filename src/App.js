import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Páginas: Corretores //
import Pgcorretoreslistar from './Pgcorretoreslistar';
import Pgcorretordetalhar from './Pgcorretordetalhar';
import Pgcorretoreditar from './Pgcorretoreditar';
import Pgcorretoradicionar from './Pgcorretoradicionar';

// Páginas: Formas de pagamento //
import Pgformasdepagamentolistar from './Pgformasdepagamentolistar';
import Pgformadepagamentodetalhar from './Pgformadepagamentodetalhar';
import Pgformadepagamentoeditar from './Pgformadepagamentoeditar';
import Pgformadepagamentoadicionar from './Pgformadepagamentoadicionar';

// Páginas: Imóveis Comerciais //
import Pgimoveiscomerciaislistar from './Pgimoveiscomerciaislistar';
import Pgimovelcomercialdetalhar from './Pgimovelcomercialdetalhar';
import Pgimovelcomercialeditar from './Pgimovelcomercialeditar';
import Pgimovelcomercialadicionar from './Pgimovelcomercialadicionar';

// Páginas: Imóveis Residenciais //
import Pgimoveisresidenciaislistar from './Pgimoveisresidenciaislistar';
import Pgimovelresidencialdetalhar from './Pgimovelresidencialdetalhar';
import Pgimovelresidencialeditar from './Pgimovelresidencialeditar';
import Pgimovelresidencialadicionar from './Pgimovelresidencialadicionar';

// Páginas: Imóveis Residenciais //
import Pginquilinoslistar from './Pginquilinoslistar';



function App() {
  return (
    <div id="App" className="App">
      <h1 id="Titulo" className="Titulo">DREAMS IMOBILIÁRIA</h1>
      <BrowserRouter>
        <Routes>

          <Route exact path='/corretores/listar' element={<Pgcorretoreslistar />}></Route>
          <Route exact path='/corretor/detalhar/:empid' element={<Pgcorretordetalhar />}></Route>
          <Route exact path='/corretor/editar/:empid' element={<Pgcorretoreditar />}></Route>
          <Route exact path='/corretor/adicionar' element={<Pgcorretoradicionar />}></Route>

          <Route exact path='/formas_de_pagamento/listar' element={<Pgformasdepagamentolistar />}></Route>
          <Route exact path='/forma_de_pagamento/detalhar/:empid' element={<Pgformadepagamentodetalhar />}></Route>
          <Route exact path='/forma_de_pagamento/editar/:empid' element={<Pgformadepagamentoeditar />}></Route>
          <Route exact path='/forma_de_pagamento/adicionar' element={<Pgformadepagamentoadicionar />}></Route>

          <Route exact path='/imoveis_comerciais/listar' element={<Pgimoveiscomerciaislistar />}></Route>
          <Route exact path='/imovel_comercial/detalhar/:empid' element={<Pgimovelcomercialdetalhar />}></Route>
          <Route exact path='/imovel_comercial/editar/:empid' element={<Pgimovelcomercialeditar />}></Route>
          <Route exact path='/imovel_comercial/adicionar' element={<Pgimovelcomercialadicionar />}></Route>

          <Route exact path='/imoveis_residenciais/listar' element={<Pgimoveisresidenciaislistar />}></Route>
          <Route exact path='/imovel_residencial/detalhar/:empid' element={<Pgimovelresidencialdetalhar />}></Route>
          <Route exact path='/imovel_residencial/editar/:empid' element={<Pgimovelresidencialeditar />}></Route>
          <Route exact path='/imovel_residencial/adicionar' element={<Pgimovelresidencialadicionar />}></Route>

          <Route exact path='/inquilinos/listar' element={<Pginquilinoslistar />}></Route>

        </Routes>
      </BrowserRouter>
    </div >
  );

}

export default App;
