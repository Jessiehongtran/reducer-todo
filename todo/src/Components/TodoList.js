import React from 'react';

const TodoList = (props) => {
    console.log('props in TodoList', props)

    return (
        <div 
        className = {`task ${props.data.completed ? 'completed' : ''}`}
        onClick = {()=> props.toggleTask(props.data.id)}
        >{props.data.item}

        <button
        onClick = {() => props.clearCompleted(props.data.completed)}
        >Clear Completed</button>
        </div>
        
    )
}

export default TodoList;