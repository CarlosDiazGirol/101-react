import { useEffect, useState} from 'react'
import axios from "axios";

export default function useSearchApi (url) {

  const [result, setResult] = useState([]) 
  // LOADING
  // Error: Pikachu != pepito No existe || Rick != Ricardo No existe 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url)
        const data = res.data
        setResult(data)

      } catch (err) {
        console.log(err)
      } 
    }
    fetchData()

  }, [url])

  return {result}
}