import React from "react";

class TasksFilter extends React.Component {
  
  filterUpdate = (event) => {
    event.preventDefault();
    this.props.filterUpdate(event.target.value);
  } 
    
    render(){
        return (
            <form onChange={this.filterUpdate}>
            <label>Filter by Category:</label>
            <select type="text" name="category" id="category-input"> 
              <option value=""></option>
              <option value="Home">Home</option>
              <option value="School">School</option>
              <option value="Work">Work</option> 
            </select> 
          </form>
        )
    }
}

export default TasksFilter