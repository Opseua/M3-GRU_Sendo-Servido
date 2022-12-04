import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Páginas: Corretores //
import Pgcorretoradicionar from './Pgcorretoradicionar';
import Pgcorretordetalhar from './Pgcorretordetalhar';
import Pgcorretoreslistar from './Pgcorretoreslistar';



function App() {
  return (
    <div id="App" className="App">
      <h1 id="Titulo" className="Titulo">DREAMS IMOBILIÁRIA</h1>
      <BrowserRouter>
        <Routes>

          <Route path='/corretor/adicionar' element={<Pgcorretoradicionar />}></Route>
          <Route path='/corretor/detalhar' element={<Pgcorretordetalhar />}></Route>
          <Route path='/corretores/liastar' element={<Pgcorretoreslistar />}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
