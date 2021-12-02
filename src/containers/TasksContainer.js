import React from "react";
import {connect} from "react-redux"

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

function mapStateToProps(state){
  return {
    tasks: state
  }
}

export default connect(mapStateToProps)(TasksContainer);