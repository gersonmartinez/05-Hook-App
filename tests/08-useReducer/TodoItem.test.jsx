import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";


describe('Probando en <TodoIitem />', () => {  

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() ); // Incluir en onDeleteTodoMock y onToggleTodoMock

    test('debe de mostrar el Todo pendiente de completar', () => { 
        
        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            /> 
        );

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center'); // Usamos toContain para que contenga el espacio que hay despues del align-self-center
        expect( spanElement.className ).not.toContain('text-decoration-line-through'); // Que no contenga la clase del text-decoration...

    })

    test('debe de mostrar el Todo completado', () => {
        
        todo.done = true;
        
        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through'); 

    });

    test('span debe de llamar el ToggleTodo cuando se hace click', () => {  

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );  // fireEvent.click: Simular un click
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

    });

    test('button debe de llamar el deleteTodo', () => {  

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            /> 
        );

        const deleteButton = screen.getByRole('button');
        fireEvent.click( deleteButton );  // fireEvent.click: Simular un click
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

    })

})