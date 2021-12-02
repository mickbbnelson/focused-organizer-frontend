import React from "react";

class taskForm extends React.Component {
  
  
    render() {
    return (
    <div>
        <h1>Add a Task</h1>
        <form>
            <label>Task:</label>
            <input type="text" name="task" />
            <label>Priority:</label>
            <input type="text" name="priority" />
            <label>Category:</label>
            <input type="text" name="category" />
            <label>Notes:</label>
            <input type="text" name="notes" />
            <input type="submit" value="Add Task"/>
        </form>
    </div>
    );
  }
}

export default taskForm;