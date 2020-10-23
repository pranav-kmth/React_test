import React from 'react';

const TodoItem =({setTodos ,todo,todos,todotext}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        console.log(todo);
    };

    const removeHandler = (e) => {
        if(todo.completed === false)
        {
            todo.completed = true ;
        }
        else if(todo.completed === true)
        {
            todo.completed = false ;
        }
        console.log(todo);
        console.log(todos);
    }

    return (
        <div className = "todo">
            <li className="todo-item">{todotext}</li>
            <button className ="complete-btn" onClick = {removeHandler}> 
                +
            </button>
            <button className= "trash-btn" onClick = {deleteHandler}> 
                Trash
            </button>

        </div>
    );
};

export default TodoItem ;
