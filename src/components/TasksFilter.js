import React from "react";

const TasksFilter = (props) => {
  
  const filterUpdate = (event) => {
    event.preventDefault();
    props.filterUpdate(event.target.value);
  } 
    
      return (
          <form onChange={filterUpdate}>
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

export default TasksFilter