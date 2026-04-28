import { useState } from 'react'
import './App.css'

function App() {
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonImg, setPokemonImg] = useState("")
  const [pokemon, setPokemon] = useState([])

  const urlImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

  const handleSubmit = (e) => {
    e.preventDefault()
    setPokemon(prev => [...prev, {pokemonName, pokemonImg}])
    setPokemonName("")
    setPokemonImg("")
  }

  const handleDelete = (indexRemove) => {
    setPokemon(prev => {
      const updatePokemons = [...prev]
      updatePokemons.splice(indexRemove, 1)
      return updatePokemons
    })
  }

  return (
    <div className='layout-wrapper'>
      <header>
        <div className='logo'>
          <h2>LOGO</h2>
        </div>
        <nav>
          <ul>
            <li>Pelis</li>
            <li>Favoritos</li>
            <li>...</li>
          </ul>
        </nav>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            value={pokemonName} 
            placeholder='escribe tu pokemon preferido'
            onChange={(e) => setPokemonName(e.target.value)}
            required 
          />
          <input 
            type='number'
            value={pokemonImg} 
            placeholder='escribe tu pokemon preferido'
            onChange={(e) => setPokemonImg(e.target.value)}
            required 
          />
        <button type='submit'>Añadir</button>
        </form>
        <ul>
          {pokemon.map((poke, id) => {
            return (
              <li key={id}>
                <h2>{poke.pokemonName}</h2>
                <img src={`${urlImg}${poke.pokemonImg}.png`} alt={poke.pokemonName}/>
                <button onClick={() => handleDelete(id)} type='button'>Eliminar</button>
              </li>
            )
          })}
        </ul>
      </main>
      <footer>
        <p>Soy el footer</p>
      </footer>
    </div>
  )
}

export default App
