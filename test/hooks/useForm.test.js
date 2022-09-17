import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

describe('Preubas en useForm', () => {
    
    const initialForm = {
        name:'Martin',
        email:'martin@ejemplo.com'
    }
    test('debe de regresar la informacion por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm))
        expect(result.current).toEqual({
            name:initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onReset: expect.any(Function)
        })
    });

    test('debe cambiar el name del formulario', () => {
        
        const newValue = 'Jaun'
        
        const { result } = renderHook( () => useForm(initialForm))
        const { onInputChange } = result.current;
        
        act(() => {
            onInputChange({target:{name:'name', value:newValue}})
        })

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue)

    });

    test('debe cambiar de hacer el reset del formulario', () => {
        
        const newValue = 'Jaun'
        
        const { result } = renderHook( () => useForm(initialForm))
        const { onInputChange, onReset } = result.current;
        
        act(() => {
            onInputChange({target:{name:'name', value:newValue}})
            onReset();
        })

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.email).toBe(initialForm.email)

    });
});