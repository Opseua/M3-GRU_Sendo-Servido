import { BrowserRouter, Route, Routes } from 'react-router-dom'


// ################# MARIANA (Home) ################# //
import '../css/style_home.css';

// Página: Home //
import AppHome from './AppHome';



// ROTAS //
function AppRoutesHome() {
  return (
    <div id="App" className="App">
      <h1 id="Titulo" className="Titulo">DREAMS IMOBILIÁRIA</h1>
      <BrowserRouter>
        <Routes>

          <Route exact path='/home' element={<AppHome />}></Route>

        </Routes>
      </BrowserRouter>
    </div >
  );

}

export default AppRoutesHome;
