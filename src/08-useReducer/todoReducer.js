export const todoReducer = ( initialState = [], action ) => {
    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ]
        case '[TODO] Delete Todo':
            // throw new Error('Action.type = ACB no esta implementado')

            return initialState.filter( todo => todo.id !== action.payload );
        case '[TODO] Toogle todo':
            return initialState.map( todo => {
                if(todo.id === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
        default:
            return initialState;
    }
}

