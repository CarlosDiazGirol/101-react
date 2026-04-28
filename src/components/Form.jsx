import { useState } from 'react'

function Form () {
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonImg, setPokemonImg] = useState("")
  const [pokemon, setPokemon] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setPokemon(prev => [...prev, {pokemonName, pokemonImg}])
    setPokemonName("")
    setPokemonImg("")
  }
  
  const urlImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

  const handleDelete = (indexRemove) => {
    setPokemon(prev => {
      const updatePokemons = [...prev]
      updatePokemons.splice(indexRemove, 1)
      return updatePokemons
    })
  }
  return (
  <>
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
  </>
  )
}

export default Form