import React from "react";

class TasksContainer extends React.Component {
  
  componentDidMount(){
    fetch("http://localhost:3000/tasks")
    .then(response => response.json())
    .then(data => console.log(data))
  }
  
  render() {
    return <h1>Tasks Container</h1>;
  }
}

export default TasksContainer;