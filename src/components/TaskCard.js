import React from 'react';
import { connect } from 'react-redux'
import { deleteTask } from '../actions/TaskActions'
import { Link } from 'react-router-dom'

const TaskCard = (props) => {
    console.log(props)
    
    function handleClick(){
        props.dispatchDelete(props.task.id)
    }

    const viewLink = `/tasks/${props.task.id}`

    return (
        <div id="task-card">
            <span>{props.task.title} - Priority: {props.task.priority}</span>
            <button onClick={handleClick} id="delete">Delete</button>
            <Link to={viewLink} >
            <button id="view">View</button>
            </Link>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        dispatchDelete: (id) => dispatch(deleteTask(id))
    }
}

export default connect(null, mapDispatchToProps)(TaskCard);
