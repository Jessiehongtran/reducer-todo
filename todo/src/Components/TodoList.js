import React from 'react';

const TodoList = (props) => {
    console.log('props in TodoList', props)

    return (
        <div>{props.data.item}</div>
    )
}

export default TodoList;