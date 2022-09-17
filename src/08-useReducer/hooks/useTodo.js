import { useEffect, useReducer, useState } from "react"
import { useConter } from "../../hooks/useCounter"
import { todoReducer } from "../todoReducer"

const initialState = []
const init = () => { return JSON.parse( localStorage.getItem('todos') || [])}

export const useTodo = () => {
    
    const [countPending, setCountPending] = useState(0)

    const [ todos, dispatchTodo ] = useReducer( todoReducer, initialState, init)
    const { counter, setCounter} = useConter(todos.length)


    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos) || [])
        setCounter(todos.length)
        setCountPending(todos.filter(todo => !todo.done).length)
    }, [todos])
    
    const hadleSumit = (todo) => {

        const action = {
            type:'[TODO] Add Todo',
            payload:todo,
        }

        dispatchTodo( action )

    }

    const handleDeleteTodo = ( id ) =>{
        dispatchTodo({
            type:'[TODO] Delete Todo',
            payload:id,
        })
    }

    const handlerToggleTodo = (id) => {
        dispatchTodo(
            {
                type:'[TODO] Toogle todo',
                payload: id,
            }
        )
    }

  return {
    todos, 
    handleDeleteTodo,
    handlerToggleTodo, 
    hadleSumit,
    todosCount:counter,
    pendingTodosCount:countPending,
  }
}
