import LayoutDefault from '../template/LayoutDefault/LayoutDefault'
import { Routes, Route } from 'react-router-dom'
import AddPokemon from './pages/AddPokemon'
import Rick from './pages/Rick'
import RickDetail from './components/RickDetail'
import NotFound from './pages//NotFound'
import Formulario from './Formulario'
import './App.css'

function App() {
  return (
    <LayoutDefault>
      <main>
        <Routes>
          <Route path='/' element={<AddPokemon />} />
          <Route path='/rick' element={<Rick />} />
          <Route path='/rick/:name' element={<RickDetail />} />
          <Route path='/formulario' element={<Formulario />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </LayoutDefault>
  )
}

export default App
