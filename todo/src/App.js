import React from 'react';
import './App.css';
import TodoForm from './Components/TodoForm'

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;

