import React from 'react';
import { connect } from 'react-redux'
import { deleteTask } from '../actions/TaskActions'
import { NavLink } from 'react-router-dom'

const TaskCard = (props) => {
    console.log(props)
    
    function handleClick(){
        props.dispatchDelete(props.task.id)
    }

    function handleEdit(){

    }

    return (
        <div>
            <span>{props.task.task} - 
            Priority: {props.task.priority}, 
            Category: {props.task.category}, 
            Notes: {props.task.notes} </span>
            <button onClick={handleClick}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        dispatchDelete: (id) => dispatch(deleteTask(id))
    }
}

export default connect(null, mapDispatchToProps)(TaskCard);
