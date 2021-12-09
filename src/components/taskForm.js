import React from "react";
import { connect } from "react-redux"
import { addTask } from "../actions/TaskActions"
//import TaskDateForm from "./TaskDateForm"

class TaskForm extends React.Component {
  state = {
      title: '',
      priority: 'Top',
      category: 'Home',
      notes: '',
      date: ''
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
        title: '',
        priority: 'Top',
        category: 'Home',
        notes: '',
        date: ''
    })
  }

    render() {
    return (
    <div>
        <h1>Add a Task</h1>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="title-input">Task:</label>
            <input type="text" name="title" id="title-input" onChange={this.handleChange} value={this.state.title} />
            
            <label htmlFor="priority-input">Priority:</label>
            <select type="text" name="priority" id="priority-input" onChange={this.handleChange} value={this.state.priority}> 
                <option value="Top">Top</option>
                <option value="Middle">Middle</option>
                <option value="Bottom">Bottom</option>           
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
            
            <h3>Optional date info</h3>
            
            <label htmlFor="dateinput">Date and time:</label>
            <input type="datetime-local" name="date" id="dateinput" onChange={this.handleChange} value={this.state.date} />

            
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