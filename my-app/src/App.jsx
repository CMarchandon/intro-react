import {TitleBox} from './assets/TitleBox.jsx';
import {InputAdd} from './assets/InputAdd.jsx';
import {ToDoList} from './assets/Todos.jsx';
import './App.css';

function App() {
  return (
    <>
      <TitleBox></TitleBox>
      <InputAdd></InputAdd>
      <ToDoList></ToDoList>
    </>
  );
}

export default App;
