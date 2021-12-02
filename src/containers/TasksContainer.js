import React from "react";
import {connect} from "react-redux"
import {getTasks} from '../actions/taskActions'

class TasksContainer extends React.Component {
  
  componentDidMount(){
    fetch("http://localhost:3000/tasks")
    .then(response => response.json())
    .then(data => this.props.dispatchTasks(data))
  }
  
  render() {
    return (
    <div>
    <h1>Tasks Container</h1>
    <div>
      {console.log(this.props.tasks)}
      {this.props.tasks.map((task) => <p key={task.id}>{task.task}</p>)}
    </div>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispatchTasks: (tasks) => dispatch(getTasks(tasks))
  }
}

function mapStateToProps(state){
  return {
    tasks: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);