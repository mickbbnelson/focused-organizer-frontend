import React from "react";

class TaskForm extends React.Component {
  state = {
      task: '',
      priority: '',
      category: '',
      notes: ''
  }

  handleChange = (event) => {
    this.setState({
       [event.target.name]: event.target.value 
    })
  }
  
    render() {
    return (
    <div>
        <h1>Add a Task</h1>
        <form>
            <label htmlFor="task-input">Task:</label>
            <input type="text" name="task" id="task-input" onChange={this.handleChange} />
            <label htmlFor="priority-input">Priority:</label>
            <input type="text" name="priority" id="priority-input" onChange={this.handleChange} />
            <label htmlFor="category-input">Category:</label>
            <input type="text" name="category" id="category-input" onChange={this.handleChange} />
            <label htmlFor="notes-input">Notes:</label>
            <input type="text" name="notes" id="notes-input" onChange={this.handleChange} />
            <input type="submit" value="Add Task"/>
        </form>
    </div>
    );
  }
}

export default TaskForm;