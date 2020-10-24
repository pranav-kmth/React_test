import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt , faPlus} from '@fortawesome/free-solid-svg-icons';

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
            <span className={`todo-item${todo.completed ? '-s':''}`}>{todotext}</span>
            
            <button className= "trash-btn" onClick = {deleteHandler}> 
                <FontAwesomeIcon  icon = {faTrashAlt}/>
            </button>
            <button className ="complete-btn" onClick = {removeHandler}> 
            <FontAwesomeIcon  icon = {faPlus}/>
            </button>

        </div>
    );
};

export default TodoItem ;
