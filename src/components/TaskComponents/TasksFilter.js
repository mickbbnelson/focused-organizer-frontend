const TasksFilter = (props) => {
  
  const filterUpdate = (event) => {
    event.preventDefault();
    props.filterUpdate(event.target.value);
  } 
    
      return (
        <div className="center">
          <form onChange={filterUpdate}>
            <label>Filter by Category:</label>
            <select type="text" name="category" id="category-input"> 
             <option value="">All</option>
              <option value="Home">Home</option>
              <option value="School">School</option>
              <option value="Work">Work</option> 
            </select> 
          </form>
        </div>
        )
    }

export default TasksFilter