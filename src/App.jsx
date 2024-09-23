import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Detalle from './views/Detalle'
import Equipos from './views/Equipos'
import Index from './views/Index'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Equipos/>}/>
        <Route path='/Jugador/:id' element={<Detalle/>}/>
        <Route path='/indice/:Equipo' element={<Index/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
