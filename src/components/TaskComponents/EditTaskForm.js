import React from "react";

class EditTaskForm extends React.Component {
    state = {
        title: this.props.task.title,
        priority: this.props.task.brpriority,
        category: this.props.task.category,
        notes: this.props.task.notes,
        id: this.props.task.id,
        date: this.props.task.date
    }

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value 
        })
      }

    handleUpdate = (event) => {
        event.preventDefault();
        this.props.handleUpdate(this.state);
        this.props.switchButton()
        this.props.routerProps.history.push(`/tasks/${this.state.id}`)
    } 

    render(){
        console.log(this.props)
        return (
        <div className="center">
        <h1 className="center">Edit Task</h1>
        <form onSubmit={this.handleUpdate}>
            <label htmlFor="title-update">Title:</label>
            <input type="text" name="title" id="title-update" maxLength="35" onChange={this.handleChange} value={this.state.title}/>
            
            <label htmlFor="priority-update"> Priority:</label>
            <select type="text" name="priority" id="priority-update" onChange={this.handleChange} value={this.state.priority}> 
                <option value="Top">Top</option>
                <option value="Middle">Middle</option>
                <option value="Bottom">Bottom</option>           
            </select>
            <br /><br />
            <label htmlFor="category-update">Category:</label>
            <select type="text" name="category" id="category-update" onChange={this.handleChange} value={this.state.category}> 
                <option value="Home">Home</option>
                <option value="School">School</option>
                <option value="Work">Work</option>  
            </select>
            
            <label htmlFor="notes-update"> Notes:</label>
            <input type="text" name="notes" id="notes-update" onChange={this.handleChange} value={this.state.notes} />
            <br /><br />
            <label htmlFor="dateinput">Date and time(optional):</label>
            <input type="datetime-local" name="date" id="dateinput" onChange={this.handleChange} value={this.state.date} /> 

            <input type="submit" value="Submit" />
        </form>
        </div>
        )
    }
}

export default EditTaskForm