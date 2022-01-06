import { Link } from 'react-router-dom'
import React from "react"

const TaskLI = () => {
    const viewLink = `/tasks/${this.props.task.id}`
    return (
        <div id="task-card">
            <span>{this.props.task.title} - Priority: {this.props.task.priority}</span>
            <button onClick={() => this.props.handleDelete(this.props.task.id)} id="delete">Delete</button>
            <Link to={viewLink}>
            <button id="view">View</button>
            </Link>
        </div>
    )
}

export default TaskLI;
