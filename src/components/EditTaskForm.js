import React from "react";

class EditTaskForm extends React.Component {

    render(){
        return (
        <div>
        <h1>Edit Task</h1>
        <form>
            <label htmlFor="task-update">Task:</label>
            <input type="text" name="task" id="task-update" onChange={this.handleChange} />
            
            <label htmlFor="priority-update">Priority:</label>
            <select type="text" name="priority" id="priority-update" onChange={this.handleChange}> 
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>           
            </select>
            
            <label htmlFor="category-update">Category:</label>
            <select type="text" name="category" id="category-update" onChange={this.handleChange}> 
                <option value="Home">Home</option>
                <option value="School">School</option>
                <option value="Work">Work</option>  
            </select>
            
            <label htmlFor="notes-update">Notes:</label>
            <input type="text" name="notes" id="notes-update" onChange={this.handleChange} />

            <input type="submit" value="Add Task"/>
        </form>
        </div>
        )
    }
}

export default EditTaskForm