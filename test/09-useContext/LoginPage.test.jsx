import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage />', () => {
    const user = {
        id:1,
        name:'Martin'
    }
    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage />
            </UserContext.Provider>
            )
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
    });

    test('debe de mostrar el componente con el usuario', () => {

        const setUserMock = jest.fn()

        render(
            <UserContext.Provider value={{user, setUser:setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        )
        const button = screen.getByRole('button')
        fireEvent.click(button)

            expect( setUserMock ).toHaveBeenCalled()
            expect( setUserMock ).toHaveBeenCalledWith({id: 1,edad: 21,email: "martin@ejemplo.com",id: 123,name: "Martin",})

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toContain(`${JSON.stringify(user)}`)
    });

});