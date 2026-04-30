import LayoutDefault from '../template/LayoutDefault'
import { Routes, Route } from 'react-router-dom'
import AddPokemon from './pages/AddPokemon'
import Rick from './pages/Rick'
import RickDetail from './components/RickDetail'
import NotFound from './pages//NotFound'
import './App.css'

function App() {
  return (
    <LayoutDefault>
      <main>
        <Routes>
          <Route path='/' element={<AddPokemon />} />
          <Route path='/rick' element={<Rick />} />
          <Route path='/rick/:name' element={<RickDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </LayoutDefault>
  )
}

export default App
