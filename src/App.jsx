import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Detalle from './views/Detalle'
import Index from './views/Index'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/pokemon/:id' element={<Detalle/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
