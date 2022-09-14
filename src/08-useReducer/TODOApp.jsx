import React from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoAdd, TodoList } from './componets/'
import { useEffect } from 'react'
import { useTodo } from './hooks/useTodo'


export const TODOApp = () => {

    const { todos, handleDeleteTodo, handlerToggleTodo, hadleSumit, todosCount, pendingTodosCount  } = useTodo()

  return (
    <>
        <h1>To Do App ({todosCount}) <small>pendientes: ({pendingTodosCount})</small></h1>
        <hr />

        <div className="row">

            <div className="col-7">
                <TodoList 
                    todos={ todos } 
                    onDeleteTodo={handleDeleteTodo} 
                    onToggleTodo={ handlerToggleTodo }
                />
            </div>

            <div className="col-5">
                <TodoAdd 
                    onSumitClick={(todo) => hadleSumit(todo) }
                />
            </div>

        </div>
    </>
  )
}

