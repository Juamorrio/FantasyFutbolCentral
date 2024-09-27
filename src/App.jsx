import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Detalle from './views/Detalle'
import Equipos from './views/Equipos'
import Index from './views/Index'
import Inicio from './views/Inicio'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Equipos' element={<Equipos/>}/>
        <Route path='/Jugador/:id' element={<Detalle/>}/>
        <Route path='/Indice/:Equipo' element={<Index/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
