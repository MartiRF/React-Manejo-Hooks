import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/componets/TodoItem";

describe('pruebas en el componente <TodoItem />', () => {
    
    const todo ={
        id:1,
        description:'Piedra del alma',
        done:false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks());

    test('debe de mostar el Todo pendiente de completar', () => {
        render(
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock} 
            />
        )
        
        const liElement = screen.getByRole('listitem')
        expect( liElement.className ).toBe('list-group-item  d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span')
        expect( spanElement.className ).toContain('align-self-center')

    });

    test('debe de mostar el Todo completado o tachado', () => {

        todo.done = true
        todo.done = true;

        console.log(todo)
        render(
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock} 
            />
        )
        
        
        const spanElement = screen.getByLabelText('span')
        expect( spanElement.className ).toContain('text-decoration-line-through')

    });

    test('el span debe llamar al onToggleTodo', () => {
        
        render(
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock} 
            />
        )

        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )
    });

    test('button debe de llamar el deleteTodo', () => {
        
        render(
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock} 
            />
        )

        const buttonDelete = screen.getByRole('button')
        fireEvent.click(buttonDelete);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
    });
});