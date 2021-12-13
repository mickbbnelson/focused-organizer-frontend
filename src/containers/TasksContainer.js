import React from "react";
import {connect} from "react-redux"
import {getTasks, deleteTask, addTask} from '../actions/TaskActions'
import TaskForm from '../components/TaskForm'
import TaskCard from '../components/TaskCard'
import TaskFilter from '../components/TasksFilter'

class TasksContainer extends React.Component {
  
  state = {
    filterValue: ''
  }

  componentDidMount(){
    this.props.dispatchTasks()
  }

  handleDelete = (taskid) => {
    this.props.dispatchDelete(taskid)
  }

  handleAdd = (task) => {
    this.props.dispatchAdd(task)
  }
  
  filterUpdate = (category) => {
    this.setState({
    filterValue: category
    })
  } 

  filterArray(){
    let prioritizedArray = this.props.tasks.sort((a, b) => (a.priority > b.priority) ? -1 : 1)
    if (this.state.filterValue === "") {
      return prioritizedArray
    } else {
      let newArray = this.props.tasks.filter(task => task.category === this.state.filterValue);
      return newArray
    }
  }
  
  render() {
    console.log(this.state)
    let filteredArray = this.filterArray()
    return (
    <div>
    <h1 className="center">Tasks</h1>

    <div id="task-cards">
      {console.log(this.filterArray())}
      {filteredArray.map((task) => <TaskCard key={task.id} task={task} handleDelete={this.handleDelete}/>)}
    </div>
    <div className="center">
    <TaskFilter filterUpdate={this.filterUpdate}/>
    </div>
    <div>
    <TaskForm handleAdd={this.handleAdd} />
    </div>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispatchTasks: () => dispatch(getTasks()),
    dispatchDelete: (taskid) => dispatch(deleteTask(taskid)),
    dispatchAdd: (task) => dispatch(addTask(task))
  }
}

function mapStateToProps(state){
  return {
    tasks: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);