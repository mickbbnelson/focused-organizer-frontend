import React from 'react';
import { connect } from 'react-redux'
import { deleteTask } from '../actions/TaskActions'

const TaskCard = (props) => {
    console.log(props)
    
    function handleClick(){
        props.dispatchDelete(props.task.id)
    }

    return (
        <div>
            <span>{props.task.task} - 
            Priority: {props.task.priority}, 
            Category: {props.task.category}, 
            Notes: {props.task.notes} </span>
            <button onClick={handleClick}>Delete</button>
            <button>Edit</button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        dispatchDelete: (id) => dispatch(deleteTask(id))
    }
}

export default connect(null, mapDispatchToProps)(TaskCard);
