import React from "react";
import { connect } from "react-redux"
import EditTaskForm from "./EditTaskForm"
import { Switch, Route, Link } from 'react-router-dom';
import { updateTask } from '../actions/TaskActions'
import TasksContainer from "../containers/TasksContainer"


class TaskViewCard extends React.Component {
    constructor(props){
    super(props)

    const foundTask = this.props.tasks.find(t => {return t.id === parseInt(this.props.routerProps.match.params.id)})
    
    this.state = {
        task: foundTask.task,
        priority: foundTask.priority,
        category: foundTask.category,
        notes: foundTask.notes,
        id: foundTask.id,
        editButton: true,
        tasksButton: false
    }
    }

    handleUpdate = (taskObj) => {
        this.props.dispatchUpdate(taskObj);
        this.setState({
        task: taskObj.task,
        priority: taskObj.priority,
        category: taskObj.category,
        notes: taskObj.notes,
        id: taskObj.id,
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
            <div>
            <h1>{this.state.task}</h1> 
            <p>Priority: {this.state.priority}</p> 
            <p>Category: {this.state.category}</p> 
            <p>Notes: {this.state.notes}</p> 
            <Switch>
                <Route path="/tasks/:id/edit" component={routerProps => <EditTaskForm routerProps={routerProps} task={this.state.task} priority={this.state.priority} category={this.state.category} notes={this.state.notes} id={this.state.id} handleUpdate={this.handleUpdate} />} />
                {/* <Route path="/tasks" component={routerProps => <TasksContainer routerProps={routerProps} />} /> */}
            </Switch>
            {this.state.editButton ? <Link to={viewLink} >
            <button onClick={this.switchButton}>Edit</button>
            </Link> : null}
            {this.state.tasksButton ? <Link to='/tasks' >
            <button onClick={this.switchButton}>Return to Tasks</button>
            </Link> : null}
            </div>  
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
        dispatchUpdate: (task) => {
            console.log(task)
            dispatch(updateTask(task))
    }}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskViewCard)