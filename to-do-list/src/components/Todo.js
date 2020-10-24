import React from 'react' ;
import './Todo.css';
import TodoItem from './TodoItem';


const Todo = ({todos , setTodos}) => {

    return ( 
        <div className = "todo-container">
            
                {todos.map( (todo)=> (
                    <TodoItem 
                    todotext = {todo.text} 
                    key = {todo.id}
                    setTodos = {setTodos}
                    todos = {todos}
                    todo = {todo}
                    />
                ))}
            
            

        </div>
    )
}

export default Todo ;
