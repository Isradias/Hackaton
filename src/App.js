import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

import PlanosAtivos from './PlanosAtivos'

import Quartos from './pages/CriarPlanos/CriarPlanos.js'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/planos_ativos' element={<PlanosAtivos/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
