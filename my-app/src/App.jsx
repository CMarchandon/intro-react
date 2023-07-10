import { useState } from 'react'
import {titleBox} from './assets/title'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    function App() {
      inputAdd();
      toDoList();
      titleBox();
      return App()
      ;
    }
  )
}

export default App
