import { useState } from 'react';
import {TitleBox} from './assets/TitleBox.jsx';
import {InputAdd} from './assets/InputAdd.jsx';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  //récupére les donneés
  function addNewItemsToTodoList (){
    let inpuTodo = document.querySelector('#inputTodoList');
    setItems ([...items, inpuTodo.value]);
  }

  function deleteItemFromToDoList(index) {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  return (
    <>
      <TitleBox></TitleBox>
      <InputAdd onClick={()=>addNewItemsToTodoList()}></InputAdd>
      <ul>
        {items.map((item,i) => {
        return (
          <li key={i}><input type="checkbox"/>{item} <i onClick={()=>deleteItemFromToDoList()} class="fa-solid fa-trash"></i></li>
        )
      
      })}
      </ul>
    </>
  )
}

export default App;
