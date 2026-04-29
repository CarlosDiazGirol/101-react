import LayoutDefault from '../template/LayoutDefault'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AddPokemon from './pages/AddPokemon'
import Rick from './pages/Rick'
import NotFound from './pages//NotFound'

function App() {
  return (
    <LayoutDefault>
      <main>
        <Routes>
          <Route path='/' element={<AddPokemon />} />
          <Route path='/rick' element={<Rick />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </LayoutDefault>
  )
}

export default App
