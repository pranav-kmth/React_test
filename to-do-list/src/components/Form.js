import React from 'react';
import './Form.css';

const Form  = ({setInput , todos , setTodos , inputText , setStatus}) => {
    
    const inputHandler = (event) => {
        console.log(event.target.value);
        setInput(event.target.value);
    }

    const submitValue = (event) => {
        event.preventDefault();
        console.log("submitting");
        console.log(inputText);
        setTodos(
            [...todos , {text : inputText , completed : false , id : Math.floor(Math.random()*10000 +1)}]
        );
        setInput("");
    }
    const submitHandler = (event) => {
        setStatus(event.target.value);
    }

    return (
        <div className = "todo-form"> 
            <form >
                <input 
                value = {inputText}
                onChange = {inputHandler} 
                type = "text" 
                className = "todo-input"/>
                <button onClick = {submitValue} className = "todo-button" type="submit">  
                    Add
                </button>
                
                <select name = "todos" className = "filter-todo" onChange= {submitHandler}>
                    <option value = "all">
                        All
                    </option>
                    <option value = "completed">
                        Completed
                    </option>
                    <option value = "incomplete">
                        Incomplete
                    </option>
                </select>
                
            </form>
        </div>
    )
}

export default Form ;
