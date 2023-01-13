

export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case '[TODO] Add Todo': 
            return [ ...initialState, action.payload ];

        // AGREGADO CLASE 148
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload ); // El filter regresa un nuevo arreglo   | !== esto significa diferente de ...
        //FIN AGREGADO CLASE 148

        // AGREGADO CLASE 149
        case '[TODO] Toggle Todo':
            return initialState.map( todo => { //map: transforma un arreglo en otra cosa

                if( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: todo.done  // Si la condición se cumple entonces debe de cambiar el done: todo.done a false o true
                    }
                }

                return todo;
            } )  

        default:
            return initialState;
            //FIN AGREGADO CLASE 149
    }
}
         