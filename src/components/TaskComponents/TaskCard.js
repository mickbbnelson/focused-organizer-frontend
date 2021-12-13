import { Link } from 'react-router-dom'

const TaskCard = (props) => {

    const viewLink = `/tasks/${props.task.id}`

    return (
        <div id="task-card">
            <span>{props.task.title} - Priority: {props.task.priority}</span>
            <button onClick={() => props.handleDelete(props.task.id)} id="delete">Delete</button>
            <Link to={viewLink} >
            <button id="view">View</button>
            </Link>
        </div>
    )
}

export default TaskCard;
