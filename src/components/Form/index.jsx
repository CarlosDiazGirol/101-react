import { useState } from 'react'
import Card from '../Card'
import Button from '../Button/Button'
import styles from './Form.module.css'



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
    <Button type='submit' label='Añadir' variant="accept"/>
  </form>
  <ul className={styles.list}>
    {pokemon.map((poke, id) => {
      return ( <Card key={id} poke={poke} id={id} onDelete={handleDelete}/>)
    })}
  </ul>
  </>
  )
}

export default Form