import { Link } from 'react-router-dom'
import React from "react"

class TaskLI extends React.Component {

    state = {
        counter: 0
    }

    handleClick = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
           }))
    }

    render() {
    const viewLink = `/tasks/${this.props.task.id}`
    return (
        <div id="task-card">
            <span>{this.props.task.title} - Priority: {this.props.task.priority}</span>
            <button onClick={() => this.props.handleDelete(this.props.task.id)} id="delete">Delete</button>
            <Link to={viewLink}>
            <button id="view">View</button>
            </Link>
            <button onClick={this.handleClick}>Like</button>
            <p>Likes:{this.state.counter}</p>
            {console.log(this.state)}
        </div>
    )
}}

export default TaskLI;
