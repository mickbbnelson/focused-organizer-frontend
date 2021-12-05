export default function tasksReducer(state = [], action){
    switch (action.type) {
        case 'GET_TASKS':
        return action.payload;

        case 'ADD_TASK':
        return [...state, action.payload]; 

        case 'DELETE_TASK':
        const newArray = state.filter((task) => task.id !== action.payload)
        return newArray;

        default:
            return state;
    }
}