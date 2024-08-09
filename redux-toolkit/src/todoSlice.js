import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers:{
        addTodo: (state, action)=>{
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            return [...state, newTodo]
        },
        toggleCompleted: (state, action) =>{
            const todoItem = state.find((item)=> item.id === action.payload)
            if(todoItem){
                todoItem.completed = !todoItem.completed
            }
        },
        deleteTodo: (state, action)=>{
            const todoItemIndex = state.findIndex((item) => item.id === action.payload)
            if(todoItemIndex !== -1){
                const result = [...state.slice(0, todoItemIndex), ...state.slice(todoItemIndex)]
                return result
            }
        }
    }
})

export const { addTodo, toggleCompleted, deleteTodo} = todoSlice.actions
export default todoSlice.reducer