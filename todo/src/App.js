import React, {useState, useReducer} from 'react';
import {initialState, Reducer} from './Reducers/reducer'
import './App.css';
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'

function App() {
  const [newtask, setNewTask] = useState()

  const [state, dispatch] = useReducer(Reducer, initialState)
  console.log('state', state)
  

  return (
    <div className="App">
      <h1>Hello, what are your things to do today?</h1>
      <TodoForm />
      <TodoList data={state}/>
    </div>
  );
}

export default App;

