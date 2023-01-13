import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/Hooks/useFetch";
import { useCounter } from "../../src/Hooks/useCounter";

jest.mock('../../src/Hooks/useFetch');
jest.mock('../../src/Hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => { 

    const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement,
        });

        beforeEach( () => {
            jest.clearAllMocks();
        } )

    useFetch.mockReturnValue({
        data: null,
        isLoading: true,
        hasError: null,
    })

    // INICIO CLASE 169 
    test('debe de mostrar el componente por defecto', () => { 

        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Loading...'))
        expect( screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole( 'button', {name: 'Next quote'} ) //Desabilitar el Button
        expect( nextButton.disabled ).toBeTruthy(); //toBeTruthy: Que sea verdadero
        // screen.debug();

    }) // FIN CLASE 169

    // INICIO CLASE 170
    test('debe de mostrar un Quote', () => { 

        useFetch.mockReturnValue({
            data: [{ author: 'Gerson', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null,
        })

        render( <MultipleCustomHooks /> );
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Gerson') ).toBeTruthy();

        const nextButton = screen.getByRole( 'button', {name: 'Next quote'} ) //Desabilitar el Button
        expect( nextButton.disabled ).toBeFalsy();

    });

    test('debe de llamar la función de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Gerson', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole( 'button', {name: 'Next quote'} );
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
     })
})