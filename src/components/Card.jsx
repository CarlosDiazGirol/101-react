function Card ({poke, id, onDelete}) {
  const urlImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  return (
    <li>
      <h2>{poke.pokemonName}</h2>
      <img src={`${urlImg}${poke.pokemonImg}.png`} alt={poke.pokemonName}/>
      <button onClick={() => onDelete(id)} type='button'>Eliminar</button>
    </li>
  )
}

export default Card
