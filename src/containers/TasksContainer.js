import React from "react";
import {connect} from "react-redux"
import {getTasks} from '../actions/TaskActions'
import TaskForm from '../components/TaskForm'
import TaskCard from '../components/TaskCard'
//import { Route, Switch } from 'react-router-dom'
//import TaskViewCard from '../components/TaskViewCard'

class TasksContainer extends React.Component {
  
  componentDidMount(){
    this.props.dispatchTasks()
  }
  
  render() {
    return (
    <div>
    <h1>Tasks Container</h1>
    <div>
      {console.log(this.props.tasks)}
      {this.props.tasks.map((task) => <TaskCard key={task.id} task={task} />)}
    </div>
    <div>
    <TaskForm />
    </div>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispatchTasks: () => dispatch(getTasks())
  }
}

function mapStateToProps(state){
  return {
    tasks: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);