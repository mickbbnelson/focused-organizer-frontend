import React from 'react';
import connect from 'react-redux'
import { deleteTask } from '../actions/taskActions'


const TaskCard = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.task.task} - 
            Priority: {props.task.priority}, 
            Category: {props.task.category}, 
            Notes: {props.task.notes} </p>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        deleteTask: (id) => dispatch(deleteTask(id))
    }
}

export default connect(null, mapDispatchToProps)(TaskCard);
