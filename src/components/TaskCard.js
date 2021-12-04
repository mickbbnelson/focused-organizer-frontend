import React from 'react';

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

export default TaskCard;
