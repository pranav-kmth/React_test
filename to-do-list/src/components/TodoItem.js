import React from 'react';

const TodoItem =({setTodos ,todo,todos,todotext}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        console.log(todo);
    };

    return (
        <div className = "todo">
            <li className="todo-item">{todotext}</li>
            <button className ="complete-btn"> 
                +
            </button>
            <button className= "trash-btn" onClick = {deleteHandler}> 
                Trash
            </button>

        </div>
    );
};

export default TodoItem ;
