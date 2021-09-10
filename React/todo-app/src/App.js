import './App.css';
import { useState } from 'react';

import Todo from "./components/Todo";

function App() {
  const [todos, updateTodos] = useState([
    // {
    //   id: 1,
    //   title: 'todo1',
    //   checked: false
    // },
    // {
    //   id: 2,
    //   title: 'todo2',
    //   checked: true
    // }
  ])

  const addTodo = () => {
    const title = prompt('Que tareas vas a realizar?')
    if (title){
      const todo = {
        id: new Date().getTime(),
        title,
        checked: false
      }

      console.log(todo)

      updateTodos([...todos, todo])


    }
  }

  const borrarTodo = (todo)=>{
    console.log("Voy a borrar el ID ", todo)
    updateTodos(todos.filter(item => item.id !== todo.id))
  }

  return (
    <div className="container center">
      <h1 className="center title">TODO App</h1>
      <div className="flow-right controls">
        <span>Item count: <span id="item-count">{ todos.length }</span></span>
        <span>Unchecked count: <span id="unchecked-count">0</span></span>
      </div>
      <button className="button center" onClick={addTodo} >Agregar Tarea</button>
      <ul id="todo-list" className="todo-list">
        {
          todos.map(item => (<Todo key={item.id} todo={item} callbackBorrado={borrarTodo} />))
        }
      </ul>
    </div>
  );
}

export default App;
