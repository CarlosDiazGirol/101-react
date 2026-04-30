import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Spinner from "./Spinner"

function RickDetail () {
  const { name } = useParams()
  const urlRick = `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(name)}`
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  
  useEffect(() => {
    const getCharacter = async () => {
      try {
        setLoading(true)
        setError("")
        const response = await axios.get(urlRick)
        setCharacter(response.data.results[0])
      } catch {
        setCharacter(null)
        setError("El personaje que buscas no está")
      } finally {
        setLoading(false)
      }
    }
    getCharacter()
  }, [name])
  return (
    <>
    {!character &&
      <div className="containerLoad">
        {loading && <p><Spinner /></p>}
        {error && <p>{error}</p>}
      </div>
    }

    {character && (
        <>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name}/>
          <p>Especie: {character.species}</p>
          <p>Status: {character.status}</p>
          <Spinner />
          
        </>
      )
    }
    </>
  )
}



export default RickDetail














