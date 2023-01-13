import { TodoItem } from "./TodoItem"

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo }) => {

  return (
    <ul className="list-group">
        {
            todos.map( todo => (
                <TodoItem 
                  key={ todo.id } 
                  todo = { todo } 
                  onDeleteTodo = { id => onDeleteTodo(id) } // AGREGADO CLASE 148
                  onToggleTodo = { onToggleTodo }  // AGREGADO CLASE 149
                />
                
            ))
        }
    </ul>
  )
}
