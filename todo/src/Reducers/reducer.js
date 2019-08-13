export const initialState = {
    todos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]
}



export const Reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return { 
                ...state,
                todos: [...state.todos,{item: action.payload,
                completed: false,
                id: Date.now()
                }]
            }

        default:
            return state;
    }
}