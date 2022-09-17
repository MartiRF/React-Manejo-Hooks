import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('pruebas en useReducer', () => {
    
    const inicialState = [{
        id:1,
        description:'Demo Todo',
        done:false
    }]

    test('debe de regresar el estado inicial ', () => {
        
        const newState = todoReducer( inicialState,{} )
        expect( newState ).toBe( inicialState );

    });

    test('debe de agregar un tood', () => {
        const action = {
            type:'[TODO] Add Todo',
            payload:{
                id:2,
                description:'Nuevo todo #2',
                done:false,
            }
        }
        const newState = todoReducer( inicialState,action )
        expect( newState.length ).toBe( 2 );
        expect(newState).toContain(action.payload);
    });

    test('debe de eliminar un todo', () => {
        const action = {
            type:'[TODO] Delete Todo',
            payload:1
        }
        const newState = todoReducer( inicialState,action )
        expect(newState.length).toBe(0)
    });

    test('debe de realizar el Toggle de Todo', () => {
        const action = {
            type:'[TODO] Toogle todo',
            payload:1
        }
        const newState = todoReducer(inicialState,action)

        expect(newState[0].done).toBe(true)
    });
});