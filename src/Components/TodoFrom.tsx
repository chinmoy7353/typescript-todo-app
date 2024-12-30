import React, { useState } from 'react'
import '../Components/TodoFrom.css'
const TodoFrom = ({addTodo}) => {

    const [inputValue, setInputValue]=useState('')

    const handleChange =(e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(inputValue){
            addTodo(inputValue)
            setInputValue('')
        }
    }

    // console.log(inputValue)
  return (
    <div className='from'>
      <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <button type='submit' className='button'>add</button>
      </form>
    </div>
  )
}

export default TodoFrom
