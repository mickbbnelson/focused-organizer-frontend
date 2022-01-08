import React from "react"
import { connect } from "react-redux"
import EditTaskForm from "../components/TaskViewComponents/EditTaskForm"
import { Route, Link } from 'react-router-dom'
import { updateTask, getTasks } from '../actions/TaskActions'
import TaskViewDisplay from '../components/TaskViewComponents/TaskViewDisplay'

class TaskViewContainer extends React.Component {
    state = {
        title: '',
        priority: '',
        category: '',
        notes: '',
        date: '',
        id: '',
        editButton: true,  
    }

    componentDidMount(){
        this.props.dispatchTasks() 
    }

    componentDidUpdate(){
        if (this.state.title === "" && this.props.tasks.find(task => {return task.id === parseInt(this.props.routerProps.match.params.id)})) {
            const foundTask = this.props.tasks.find(task => {return task.id === parseInt(this.props.routerProps.match.params.id)})
            return this.setState({
                title: foundTask ? foundTask.title : '',
                priority: foundTask ? foundTask.priority : '',
                category: foundTask ? foundTask.category : '',
                notes: foundTask ? foundTask.notes : '',
                date: foundTask ? foundTask.date : '',
                id: foundTask ? foundTask.id : '',
                editButton: true,
            })
          } 
    }

    handleUpdate = (taskObj) => {
        this.props.dispatchUpdate(taskObj);
        this.setState({
        title: taskObj.title,
        priority: taskObj.priority,
        category: taskObj.category,
        notes: taskObj.notes,
        id: taskObj.id,
        date: taskObj.date,
        tasksButton: true
        })
    } 

    switchButton = () => {
       this.setState(prevState => ({
        editButton: !prevState.editButton
       }))
    }

    render(){
        const viewLink = `/tasks/${this.state.id}/edit`
        return (
            <>
            <TaskViewDisplay {...this.state} />
            <Route path="/tasks/:id/edit" component={routerProps => <EditTaskForm routerProps={routerProps} {...this.state} handleUpdate={this.handleUpdate} switchButton={this.switchButton} />} />
            {this.state.editButton ? <Link to={viewLink} >
            <button onClick={this.switchButton}>Edit</button>
            </Link> : null}
            <Link to='/tasks' ><button onClick={this.switchButton}>Return to Tasks</button></Link>
            </>  
        )
    }
}

function mapStateToProps(state){
    return {
      tasks: state
    }
  }

  function mapDispatchToProps(dispatch){
    return {
        dispatchUpdate: (task) => {dispatch(updateTask(task))},
        dispatchTasks: () => dispatch(getTasks())
}}

export default connect(mapStateToProps, mapDispatchToProps)(TaskViewContainer)