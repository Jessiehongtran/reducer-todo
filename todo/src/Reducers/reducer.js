export const initialState = 
    [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]




export const Reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return { 
                todos: [...state,
                {item: action.payload,
                id: Date.now(),
                completed: false}]
            }

        default:
            return state;
    }
}