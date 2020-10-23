import React , {useState}from 'react';
import Form from './components/Form';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [inputText  ,setInput] =  useState("");
  const [todos , setTodos] = useState ([]);

  return (
    <div className="App">
      <h1>Todo List </h1>
      <Form todos = {todos} setTodos = {setTodos} setInput = {setInput} inputText = {inputText}/>
      <Todo todos = {todos} setTodos = {setTodos} />
      {inputText}
    </div>
  );
}

export default App;
