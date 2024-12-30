import React, { useState } from 'react'
import '../Components/TodoContainer.css'
import TodoFrom from './TodoFrom'
import Todo from './Todo'
import EditTodo from './EditTodo'
const TodoContainer = () => {
    const [todos, setTodo] = useState([])

    const addTodo = (todo) =>{
        setTodo([...todos, {id:Math.random(), newTodo:todo, isEidting:false, complated:false},])
    }
console.log(todos)
    const deleteTodo = (id) =>{
      const todoItem =  todos.filter((item)=>{
            return item.id !== id
        })
        setTodo(todoItem)
    }

    const editTodo = (id) => {
        const updateTodo = todos.map((item)=>{
            return item.id === id ? {...item, isEidting:!item.isEidting}:item;
        })

        setTodo(updateTodo)
    }

    const updateSingleTodo = (todo, id)=>{
        const singleTodo = todos.map((item)=>{
            return item.id === id ?{...item, newTodo:todo, isEidting:!item.isEidting}:item;
        })

        setTodo(singleTodo)
    }

    const toggleComplate = (id)=>{
        const toggle = todos.map((item)=>{
            return item.id === id ? {...item, complated:!item.complated}:item
        })
        setTodo(toggle)
    }

    return (
        <div className='Todocontainer'>
            <div className="contaoner">
                <div>
                    <h1 className='todo-heading'>Todo appp</h1>
                </div>

                <div className='todo-from'>
                    <TodoFrom addTodo={addTodo}/>

                    <>
                    {
                        todos.map((todo)=>{
                            return todo.isEidting ? <EditTodo updateSingleTodo={updateSingleTodo} todo={todo} /> : <Todo key={todo.id} todos={todo} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplate={toggleComplate}/>
                        })
                    } 

                        {/* <Todo todos={todos}/> */}
                    </>
                </div>
            </div>
        </div>
    )
}

export default TodoContainer
