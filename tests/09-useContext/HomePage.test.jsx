import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/Context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage"


describe('Pruebas en <HomePage />', () => { 

    const user = {
        id: 1,
        name: 'Gerson',
    }

    test('debe de mostrar el componente sin el usuario', () => {  

        render(
            <UserContext.Provider value = {{ user: null }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect(preTag.innerHTML).toBe('null');
        // screen.debug();
    });

    test('debe de mostrar el componente con el usuario', () => {  

        render(
            <UserContext.Provider value = {{ user }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect(preTag.innerHTML).toContain( user.name );
        expect(preTag.innerHTML).toContain( user.id.toString() ); // se le agrega .toString porque el id está dentro de un objeto
                                                                  // Otra forma es evaluarlo com un temple string ${ `user.id ` }
        // screen.debug();
    })
})