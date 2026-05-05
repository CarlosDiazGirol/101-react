import { useEffect, useRef, useState } from "react"
function Formulario () {
  const inputRef = useRef(null)
  const divRef = useRef(null)
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("inputRef value:", inputRef.current.value)
    console.log("divRef value:", inputRef.current.offsetTop)
    setValue(inputRef.current.value)
    inputRef.current.value = ""
    
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [value])

  return (
    <>
    <form onSubmit={handleSubmit} id="formulario">
      <input 
        type="text"
        placeholder="Escribe lo que quieras"
        ref={inputRef}
      />
      <button type="submit">Enviar</button>
    </form>
    <div ref={divRef}><p>{value}</p></div>
    </>
  )
}

export default Formulario