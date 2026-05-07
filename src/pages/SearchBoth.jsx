import { useState } from "react";
import useSearchApi from "../hooks/useSearchApi"

function SearchBoth () {
  const urlPokemon = "https://pokeapi.co/api/v2/pokemon/ditto"
  const urlRick = `https://rickandmortyapi.com/api/character/?name=$rick`
  
  const pokeApi = useSearchApi(urlPokemon)
  const rickApi = useSearchApi(urlRick)
  // const urlRick = "https://pokeapi.co/api/v2/pokemon/ditto"
  

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input /> {/* El nombre del pokemon || guardarlo en un estado*/}
      <input /> {/* El nombre de rick || guardarlo en un estado */}
      <button type="submit" ></button>
    </form>
    <section>
      <h2>Pokemon</h2>
      <h3>{pokeApi.result?.name}</h3>
      <img src={pokeApi.result?.sprites?.front_default} alt=""/>
    </section>
    {console.log(rickApi.result?.results?.[0])}
    <section>
      <h2>Rick</h2>
      <h3>{rickApi.result?.results?.[0]?.name}</h3>
      <img src={rickApi.result?.results?.[0]?.image} alt={rickApi.result?.results?.[0]?.name}/>
    </section>
    </>
  )
}

export default SearchBoth

