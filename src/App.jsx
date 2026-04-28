import LayoutDefault from '../template/LayoutDefault'
import Form from './components/Form'
import './App.css'
import Button from './components/Button'

function App() {
  return (
    <LayoutDefault>
      <main>
        <Form />
      </main>
    <Button color="red" text="aceptar"/>
    <Button color="blue" text="cancelar"/>
    </LayoutDefault>
  )
}

export default App
