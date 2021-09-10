import React from "react";

export default ({ todo, callbackBorrado }) => {
    return (
        <li className="todo-container">
            <input type="checkbox" checked={todo.checked} /> 
            <span> {todo.title}</span>
            <button onClick={() => callbackBorrado(todo)}> X </button>
        </li>
    )
}