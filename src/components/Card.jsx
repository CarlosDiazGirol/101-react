import Button from "./Button/Button"

function Card ({poke, id, onDelete}) {
  const urlImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  return (
    <li>
      <h2>{poke.pokemonName}</h2>
      <img src={`${urlImg}${poke.pokemonImg}.png`} alt={poke.pokemonName}/>
      <Button type='button' onClick={() => onDelete(id)} label='X' variant="danger"/>
    </li>
  )
}

export default Card
