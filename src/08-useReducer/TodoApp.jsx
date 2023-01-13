import { useTodos } from "../Hooks/useTodos";
import { TodoAdd, TodoList, todoReducer } from "./";

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos(); // AGREGADO CLASE 151 todosCount y pendingTodosCount

  return (
    <>
        <h1>TodoApp: { todosCount } <small>Pendientes: { pendingTodosCount }</small> </h1>
        <hr/>

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos = {todos} 
                    onDeleteTodo = { handleDeleteTodo } // AGREGADO CLASE 148 
                    onToggleTodo = { handleToggleTodo } // AGREGADO CLASE 149
                />
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>

                <TodoAdd onNewTodo={ handleNewTodo } />

            </div>

        </div>
    </>
  )
}
