import React, {useState} from 'react';

const TodoForm = (props) => {
    console.log('props in TodoForm', props)

    return (
        <div>
            <form>
               <input 
                type="text"
                name="task"

               />
               <button>Add task</button> 
            </form>
        </div>
    )
}

export default TodoForm;