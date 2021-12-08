import React from "react";

class TasksFilter extends React.Component {
    
    
    render(){
        return (
            <form>
            <label>Filter by Category:</label>
            <select type="text" name="category" id="category-input"> 
              <option value="Home">Home</option>
              <option value="School">School</option>
              <option value="Work">Work</option> 
            </select> 
          </form>
        )
    }
}

export default TasksFilter