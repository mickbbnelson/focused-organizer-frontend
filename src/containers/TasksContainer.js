import React from "react";
import {connect} from "react-redux"
import {getTasks} from '../actions/TaskActions'
import TaskForm from '../components/TaskForm'
import TaskCard from '../components/TaskCard'
import TaskFilter from '../components/TasksFilter'
//import { Route, Switch } from 'react-router-dom'
//import TaskViewCard from '../components/TaskViewCard'

class TasksContainer extends React.Component {
  
  componentDidMount(){
    this.props.dispatchTasks()
  }
  
  
  render() {
    let prioritizedArray = this.props.tasks.sort((a, b) => (a.priority > b.priority) ? -1 : 1)
    return (
    <div>
    <h1>Tasks Container</h1>
    <TaskFilter />
    <div>
      {console.log(this.props.tasks)}
      {prioritizedArray.map((task) => <TaskCard key={task.id} task={task} />)}
      {/* {this.props.tasks.map((task) => <TaskCard key={task.id} task={task} />)} */}
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