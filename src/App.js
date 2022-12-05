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

        </Routes>
      </BrowserRouter>
    </div >
  );

}

export default App;
