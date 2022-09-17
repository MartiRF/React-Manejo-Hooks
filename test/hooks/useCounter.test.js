import { render, renderHook, act } from "@testing-library/react";
import { useConter } from "../../src/hooks/useCounter";

describe('Pruebas en <useCounter />', () => {
    
    test('debe de retornar los valores por defecto', () => {
        const { result } = renderHook( () => useConter())
        const {counter, decrement, increment, reset } = result.current

        expect( counter ).toBe(10)
        expect( decrement ).toEqual( expect.any(Function));
        expect( increment ).toEqual( expect.any(Function));
        expect( reset ).toEqual( expect.any(Function));
    });

    test('debe de generar el counter con el valor de 100 ', () => {
        const { result } = renderHook( () => useConter(100))
        const { counter } = result.current;

        expect( counter ).toBe(100)
    });

    test('debe de incrementar el contador', () => {
        const { result } = renderHook( () => useConter(100))
        const { counter,increment } = result.current;

        act( () => {
            increment()
        })

        expect( result.current.counter ).toBe(101)
    });
    test('debe de decrementar el contador', () => {
        const { result } = renderHook( () => useConter(100))
        const { counter, decrement } = result.current;

        act( () => {
            decrement();
            decrement(2)
        })

        expect( result.current.counter ).toBe(97)
    });

    test('debe de hacer reset', () => {
        const { result } = renderHook( () => useConter(100))
        const { counter, increment, reset} = result.current;

        act(() => {
            increment(20)
            reset()
        })

        expect(result.current.counter).toBe(100)

    });
});