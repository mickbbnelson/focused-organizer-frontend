import React from 'react';

const TaskCard = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.task.task}</p>
        </div>
    )
}

export default TaskCard;
