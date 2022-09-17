import { render, screen } from "@testing-library/react";
import { useTodo } from "../../src/08-useReducer/hooks/useTodo";
import { TODOApp } from "../../src/08-useReducer/TODOApp";

jest.mock('../../src/08-useReducer/hooks/useTodo')

describe('Pruebas en <TODOApp />', () => {
    
    useTodo.mockReturnValue({
        todos:[
            {id:1, description:'Todo #1',done:false},
            {id:2, description:'Todo #2',done:true}
        ], 
        handleDeleteTodo:jest.fn(), 
        handlerToggleTodo:jest.fn(), 
        hadleSumit: jest.fn(),
        todosCount:2, 
        pendingTodosCount:1,
    })

    test('debe de mostart el componecte correctamente', () => {
        
        render(<TODOApp />)
        expect(screen.getByText('Todo #1')).toBeTruthy()
        expect(screen.getByText('Todo #2')).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()
    });
});