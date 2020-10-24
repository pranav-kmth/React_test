import React , {useEffect, useState}from 'react';
import Form from './components/Form';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [inputText  ,setInput] =  useState("");
  const [todos , setTodos] = useState ([]);
  const [status , setStatus] = useState("all");
  const [filtered , setFiltered] = useState([]);

  useEffect(() => {
      filterHandler();
      console.log(filtered);
  } , [todos , status]);


  const filterHandler = () => {
    switch(status){
      
      case "completed":
        console.log("completed in swicth statement");
        setFiltered(
          todos.filter( todo => todo.completed === true )
        )
        break ;
      case "incomplete":
        console.log("incomplete in swicth statement");
        setFiltered(
          todos.filter(todo => todo.completed === false)
        )
        break;
      default:
          console.log("all in swicth statement");
          setFiltered(
            todos
          )
          break;
    }
  }
  return (
    <div className="App">
      <h1 className = "App-header">Todo List </h1>
      <Form 
        todos = {todos} 
        setTodos = {setTodos} 
        setInput = {setInput} 
        inputText = {inputText} 
        setStatus={setStatus}
        className = "App-form"
        />
      <Todo 
        todos = {filtered} 
        setTodos = {setTodos} 
      />
      
    </div>
  );
}

export default App;
