import React, {useState, useReducer} from 'react';
import {initialState, Reducer} from '../Reducers/reducer'

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
            <form onSubmit={handleSubmit}>
               <input 
                type="text"
                value={newTask}
                name="task"
                onChange={handleChange}

               />
               <button onClick={() => dispatch({type: 'ADD_TASK', payload: newTask})}>Add task</button> 
            </form>
        </div>
    )
}

export default TodoForm;