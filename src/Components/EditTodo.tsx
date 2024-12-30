import React, { useState } from 'react'

const EditTodo = ({updateSingleTodo,todo}) => {

  const [editValue, setEditValue] = useState(todo.newTodo)
console.log(todo)
  const handleSubmit =(e)=>{
    e.preventDefault()
    updateSingleTodo(editValue, todo.id)
  }

  const handleChange = (e)=>{
    setEditValue(e.target.value)
  }

  console.log(editValue)
  return (
    <div className='from'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={editValue} onChange={handleChange}/>
        <button type='submit' className='button'>update</button>
      </form>
    </div>
  )
}

export default EditTodo
