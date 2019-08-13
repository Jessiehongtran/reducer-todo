export const initialState = {
    todos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]
}



export const Reducer = (state, action) => {
    console.log('state in Reducer', state)
    console.log('action in Reducer', action)

    switch(action.type) {
        
        case 'ADD_TASK':
            return { 
                ...state,
                todos: [...state.todos,{item: action.payload,
                completed: false,
                id: Date.now()
                }]
            }
        case 'TOGGLE_TASK':

            return {
               ...state,
               todos: state.todos.map(task => task.id === action.payload ? 
                {...task, completed: !task.completed} : task
                   
               )
            }

        case 'CLEAR_TASK':
            return {
                ...state,
                todos: state.todos.filter(task => !task.completed)
            }

        default:
            return state;
    }
}