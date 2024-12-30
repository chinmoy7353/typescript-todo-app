import React from 'react'
import '../Components/Todo.css'
const Todo = ({todos,deleteTodo,editTodo,toggleComplate}) => {
    console.log(todos)
    return (
        <div>
            <ul>
                <li className='flex'>
                    <span className={`todos ${todos.complated ? 'complated': 'incomplated'}`} onClick={()=>toggleComplate(todos.id)}>{todos.newTodo}</span>
                    <span onClick={()=>deleteTodo(todos.id)}>Delete</span>
                    <span onClick={()=>editTodo(todos.id)}>Edit</span>
                </li>
            </ul>
        </div>
    )
}

export default Todo
