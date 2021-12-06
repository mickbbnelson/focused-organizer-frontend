import React from "react";
import { updateTask } from '../actions/TaskActions'
import { connect } from "react-redux"

class EditTaskForm extends React.Component {
    state = {
        task: this.props.task,
        priority: this.props.priority,
        category: this.props.category,
        notes: this.props.notes,
        id: this.props.id
    }

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value 
        })
      }

    handleUpdate = (event) => {
        event.preventDefault();
        this.props.dispatchUpdate(this.state)
    } 

    render(){
        console.log(this.props)
        return (
        <div>
        <h1>Edit Task</h1>
        <form onSubmit={this.handleUpdate}>
            <label htmlFor="task-update">Task:</label>
            <input type="text" name="task" id="task-update" onChange={this.handleChange} value={this.state.task}/>
            
            <label htmlFor="priority-update">Priority:</label>
            <select type="text" name="priority" id="priority-update" onChange={this.handleChange} value={this.state.priority}> 
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>           
            </select>
            
            <label htmlFor="category-update">Category:</label>
            <select type="text" name="category" id="category-update" onChange={this.handleChange} value={this.state.category}> 
                <option value="Home">Home</option>
                <option value="School">School</option>
                <option value="Work">Work</option>  
            </select>
            
            <label htmlFor="notes-update">Notes:</label>
            <input type="text" name="notes" id="notes-update" onChange={this.handleChange} value={this.state.notes} />

            <input type="submit" value="Submit"/>
        </form>
        </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchUpdate: (task) => {
            console.log(task.id)
            dispatch(updateTask(task))
    }}
}

export default connect (null, mapDispatchToProps)(EditTaskForm)