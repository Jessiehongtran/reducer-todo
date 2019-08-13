import React, {useState, useReducer} from 'react';
import {initialState, Reducer} from '../Reducers/reducer'
import TodoList from './TodoList'

const TodoForm = () => {
    const [newTask, setNewTask] = useState()

    const [state, dispatch] = useReducer(Reducer, initialState)
    console.log('state', state)

    const handleChange = e => {
        setNewTask(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', e)
        
    }

    return (
        
        <div>
           {console.log('state in return', state)}
            <form onSubmit={handleSubmit}>
               <input 
                type="text"
                value={newTask}
                name="task"
                onChange={handleChange}
               />
               <button onClick={() => dispatch({type: 'ADD_TASK', payload: newTask})}>Add task</button> 

                {state.todos.map(task => <TodoList key={task.id} data={task}/>)}
               
            </form>
        </div>
    )
}

export default TodoForm;