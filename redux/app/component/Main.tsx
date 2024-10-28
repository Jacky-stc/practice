'use client'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { Todos } from '../types/todo'
import { addTodo, deleTodo } from '../lib/features/countSlice'


const Main = () => {
    const [inputText, setInputText] = useState<string>("")
    const dispatch = useAppDispatch()
    const todos:Todos[] = useAppSelector(state=> state.todo.todos)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    const handleClick = ()=>{
        if(inputText === ""){
            return
        }
        dispatch(addTodo({id:new Date().toLocaleString(), text:inputText}))
        setInputText("")
    }
    const handleDelete = (id:string)=>{
        dispatch(deleTodo(id))
    }
    return (
    <div>
        <input onChange={(e)=>handleChange(e)} className='text-slate-950 p-2' spellCheck={false} value={inputText}></input>
        <button className=' rounded-full w-6 h-6 align-middle text-center mx-2 hover:-translate-y-1 active:translate-y-0 bg-slate-50 text-slate-900' onClick={handleClick}>+</button>
        <ul>
      {todos.map((todo)=>
      <li key={todo.id} className='flex gap-4'>
        <div>
        {todo.text}
        </div>
        <div className='inline-block'>
            {todo.id}
        </div>
        <button onClick={()=>handleDelete(todo.id)}>delete</button>
      </li>
      )}
      </ul>
    </div>
  )
}

export default Main
