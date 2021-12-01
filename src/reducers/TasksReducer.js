export default function TasksReducer(state = [], action){
    switch (action.type) {
        case 'GET_TASKS':

        return [...state, action.payload];

        default:
            return state;
    }
}