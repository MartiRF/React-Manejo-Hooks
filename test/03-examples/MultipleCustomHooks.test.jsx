import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-explamples/MultipleCustomHooks";
import { useConter } from "../../src/hooks";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch")
jest.mock('../../src/hooks/useCounter.js')
describe('pruebas en el componente <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn()
    
    useConter.mockReturnValue({
        counter:1,
        increment:mockIncrement,
    })

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el componente por defectp', () => {
        
        useFetch.mockReturnValue({
            data:null,
            isLoading:true,
            hasError:null,
        })

        render(<MultipleCustomHooks />)
        
        expect( screen.getByText('Loading...'))
        expect( screen.getByText('Breaking-Bad Quotes'))
        
        const nextButton = screen.getByRole('button',{name: 'Next quote'})
        expect(nextButton.disabled).toBeTruthy()
    });

    test('debe de mostrat un Quote', () => {
        
        useFetch.mockReturnValue({
            data:[{author:'fernando',quote:'hola'}],
            isLoading:false,
            hasError:null,
        })

        render(<MultipleCustomHooks />)


        expect( screen.getByText('fernando')).toBeTruthy();
        expect( screen.getByText('Breaking-Bad Quotes')).toBeTruthy();

        const nextButton = screen.getByRole('button',{name: 'Next quote'})
        expect(nextButton.disabled).toBeFalsy 
    });

    test('debe de llamar la funcion de incrementar', () => {
        
        useFetch.mockReturnValue({
            data:[{author:'fernando',quote:'hola'}],
            isLoading:false,
            hasError:null,
        })
        
        render(<MultipleCustomHooks />)
        const nextButton = screen.getByRole('button',{name: 'Next quote'})

        fireEvent.click( nextButton );

        expect(mockIncrement).toHaveBeenCalled()
    });
});