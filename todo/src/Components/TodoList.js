import React from 'react';


const TodoList = (props) => {
    console.log('props in TodoList', props)

    return (
        <div 
        className = {`task ${props.data.completed ? 'completed' : ''}`}
        onClick = {()=> props.toggleTask(props.data.id)}
        >{props.data.item}       
        </div>
        
    )
}

export default TodoList;