import React, { useRef } from 'react'
import './Todo.css'
import { useState,useEffect } from 'react'

function Todo() {
  const[todo,setTodo]= useState('')
  const[todos,setTodos]=useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const addTodo = () => {
    setTodos([...todos,todo])
    console.log(todos)
    setTodo('')
  }
  const inputRef =useRef('null')

  useEffect(()=>{
    inputRef.current.focus()
  })
  return (
    <div className='container'>
        <h2>TODO App</h2>
        <form className='form-group' onSubmit={handleSubmit}>
          <input type="text" value={todo} ref={inputRef} placeholder="Enter your todo" className='form-control' onChange={(event)=>setTodo(event.target.value)} />
          <button onClick={addTodo}>ADD</button>
        </form>
        <div className='list'>
          <ul>
            {
              todos.map((to)=>(
               <li>{to}</li>
              ))
            }
            
          </ul>
        </div>
        
    </div>
  )
}

export default Todo