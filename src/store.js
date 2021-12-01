import { createStore } from 'redux';
import thunk from 'redux-thunk'
import tasksReducer from './reducers/tasksReducer'

export default createStore(tasksReducer, applyMiddleware(thunk))