import React from "react";
//import { updateTask } from '../actions/TaskActions'
import { connect } from "react-redux"

class EditTaskForm extends React.Component {
    state = {
        title: this.props.title,
        priority: this.props.priority,
        category: this.props.category,
        notes: this.props.notes,
        id: this.props.id,
        date: this.props.date
    }

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value 
        })
      }

    handleUpdate = (event) => {
        event.preventDefault();
        this.props.handleUpdate(this.state);
    } 

    render(){
        console.log(this.props)
        return (
        <div>
        <h1 class="center">Edit Task</h1>
        <form onSubmit={this.handleUpdate}>
            <label htmlFor="title-update">Title:</label>
            <input type="text" name="title" id="title-update" onChange={this.handleChange} value={this.state.title}/>
            
            <label htmlFor="priority-update">Priority:</label>
            <select type="text" name="priority" id="priority-update" onChange={this.handleChange} value={this.state.priority}> 
                <option value="Top">Top</option>
                <option value="Middle">Middle</option>
                <option value="Bottom">Bottom</option>           
            </select>
            
            <label htmlFor="category-update">Category:</label>
            <select type="text" name="category" id="category-update" onChange={this.handleChange} value={this.state.category}> 
                <option value="Home">Home</option>
                <option value="School">School</option>
                <option value="Work">Work</option>  
            </select>
            
            <label htmlFor="notes-update">Notes:</label>
            <input type="text" name="notes" id="notes-update" onChange={this.handleChange} value={this.state.notes} />

            <label htmlFor="dateinput">Date and time:</label>
            <input type="datetime-local" name="date" id="dateinput" onChange={this.handleChange} value={this.state.date} /> 

            <input type="submit" value="Submit" />
        </form>
        </div>
        )
    }
}

//function mapDispatchToProps(dispatch){
//    return {
//        dispatchUpdate: (task) => {
//            console.log(task.id)
//            dispatch(updateTask(task))
//    }}
//}

export default connect ()(EditTaskForm)