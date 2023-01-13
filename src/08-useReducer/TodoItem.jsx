

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          className= {`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}   //Agregado en la clase 149 desde el simbolo de $
          onClick={ () => onToggleTodo(todo.id) }  //Agregado en la clase 149
          aria-label="span"
        > 
          { todo.description }  {/* Agregado en la clase 149} */}
        </span>
        <button 
          className="btn btn-danger"
          onClick={ () => onDeleteTodo( todo.id ) } // AGREGADO CLASE 148
        >Borrar</button>
    </li>
  )
}
