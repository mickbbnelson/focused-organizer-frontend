import React from "react";
import { connect } from "react-redux"
import { addTask } from "../actions/TaskActions"

class TaskForm extends React.Component {
  state = {
      task: '',
      priority: 'High',
      category: 'Home',
      notes: ''
  }

  handleChange = (event) => {
    this.setState({
       [event.target.name]: event.target.value 
    })
  }
  
  handleSubmit = (event) => {
      event.preventDefault()
      this.props.dispatchTask(this.state)
      this.setState({
        task: '',
        priority: 'High',
        category: 'Home',
        notes: ''
    })
  }

    render() {
    return (
    <div>
        <h1>Add a Task</h1>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="task-input">Task:</label>
            <input type="text" name="task" id="task-input" onChange={this.handleChange} value={this.state.task} />
            
            <label htmlFor="priority-input">Priority:</label>
            <select type="text" name="priority" id="priority-input" onChange={this.handleChange} value={this.state.priority}> 
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>           
            </select>
            
            <label htmlFor="category-input">Category:</label>
            <select type="text" name="category" id="category-input" onChange={this.handleChange} value={this.state.category}> 
                <option value="Home">Home</option>
                <option value="School">School</option>
                <option value="Work">Work</option>  
            </select>
            
            <label htmlFor="notes-input">Notes:</label>
            <input type="text" name="notes" id="notes-input" onChange={this.handleChange} value={this.state.notes} />

            <input type="submit" value="Add Task"/>
        </form>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch){
    return {
      dispatchTask: (task) => dispatch(addTask(task))
    }
  }

export default connect(null, mapDispatchToProps)(TaskForm);