import React from "react";

class TaskForm extends React.Component {
  
  
    render() {
    return (
    <div>
        <h1>Add a Task</h1>
        <form>
            <label htmlFor="task-input">Task:</label>
            <input type="text" name="task" id="task-input" />
            <label htmlFor="priority-input">Priority:</label>
            <input type="text" name="priority" id="priority-input" />
            <label htmlFor="category-input">Category:</label>
            <input type="text" name="category" id="category-input" />
            <label htmlFor="notes-input">Notes:</label>
            <input type="text" name="notes" id="notes-input" />
            <input type="submit" value="Add Task"/>
        </form>
    </div>
    );
  }
}

export default TaskForm;