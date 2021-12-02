export default function tasksReducer(state = [], action){
    switch (action.type) {
        case 'GET_TASKS':
        return action.payload;

        //case 'ADD_TASK':
        //return [...state, action.payload]

        default:
            return state;
    }
}