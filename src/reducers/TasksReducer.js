export default function TasksReducer(state = [], action){
    switch (action.type) {
        case 'GET_TASKS':
        return action.payload;

        case 'ADD_TASK':
        return [...state, action.payload]; 

        case 'DELETE_TASK':
        const newArray = state.filter((task) => task.id !== action.payload)
        return newArray;

        case 'EDIT_TASK':
        const index = state.findIndex(task => task.id === action.payload.id)

        return [...state.slice(0, index),
            action.payload,
            ...state.slice(index + 1)
        ];

        default:
            return state;
    }
}