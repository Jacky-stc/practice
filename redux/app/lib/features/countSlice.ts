import { Todos } from "@/app/types/todo"
import { createSlice } from "@reduxjs/toolkit"

interface InitialState{
    todos:Todos[]
}
const initialState:InitialState = {
    todos:[]
}
const todoSlice = createSlice({
    name:'todo',
    initialState:initialState,
    reducers:{
        addTodo: (state, action)=>{
            state.todos.push(action.payload)
        },
        deleTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        }
    }
})

export const {addTodo, deleTodo} = todoSlice.actions
export default todoSlice.reducer