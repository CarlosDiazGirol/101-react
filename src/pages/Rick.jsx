import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
function Rick () {

  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character")
  const [characters, setCharacters] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  const [prevUrl, setPrevUrl] = useState(null)

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await axios.get(url)
        console.log(response.data.info)
        setCharacters(response?.data?.results)
        setNextUrl(response?.data?.info?.next)
        setPrevUrl(response?.data?.info?.prev)

      } catch (err){
        console.log(err)

      }
    }
    getCharacters()

  }, [url]) 

  const prevPage = () => {
    setUrl(prevUrl)
  }

  const nextPage = () => {
    setUrl(nextUrl)
  }

  return (
    <>
    <div className="pages">
      <button type="button" onClick={prevPage}>prev</button>
      <button type="button" onClick={nextPage}>next</button>
    </div>
    <section className="containerrick">
      <ul className="cards">
      {characters.map((character) => {
        return (
          <Link to={`/rick/${encodeURIComponent(character.name)}`} key={character.id}>
            <li> 
              <p>{character.name}</p>
              <img src={character.image} alt={character.name} />
            </li>
          </Link>
        )
      })}
      </ul>
    </section>
    </>
        
  )
}

export default Rick