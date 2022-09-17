import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe('Preubas en el componente <MainApp />', () => {
    
    test('debe de mostrat el HomaPaga', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <MainApp />
            </MemoryRouter>
        )
        
        expect( screen.getByText('HomePages')).toBeTruthy()   
    });

    test('debe de mostrat el LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/Login']}>
                <MainApp />
            </MemoryRouter>
        )

        expect( screen.getByText('LoginPage')).toBeTruthy()   
    });
});