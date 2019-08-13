import React from 'react';
import './App.css';
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'

function App() {
  

  return (
    <div className="App">
      <h1>Hello, what are your things to do today?</h1>
      <TodoForm />
      <TodoList/>
    </div>
  );
}

export default App;

