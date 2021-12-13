import React from "react";
import { connect } from "react-redux"
import EditTaskForm from "./EditTaskForm"
import { Route, Link } from 'react-router-dom';
import { updateTask } from '../../actions/TaskActions'

class TaskViewCard extends React.Component {
    constructor(props){
    super(props)

    const foundTask = this.props.tasks.find(task => {return task.id === parseInt(this.props.routerProps.match.params.id)})
    
    this.state = {
        title: foundTask ? foundTask.title : '',
        priority: foundTask ? foundTask.priority : '',
        category: foundTask ? foundTask.category : '',
        notes: foundTask ? foundTask.notes : '',
        date: foundTask ? foundTask.date : '',
        id: foundTask ? foundTask.id : '',
        editButton: true,
        tasksButton: false 
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
        console.log(this.props.routerProps)
        return (
            <div id="view-card">
            <div className="center">
            <h1 className="center">{this.state.title}</h1> 
            <p>Priority: {this.state.priority}</p> 
            <p>Category: {this.state.category}</p> 
            <p>Notes: {this.state.notes}</p> 
            {this.state.date ? <p>Date: {this.state.date.split("T")[0]}</p> : null}
            </div>
            <Route path="/tasks/:id/edit" component={routerProps => <EditTaskForm routerProps={routerProps} title={this.state.title} priority={this.state.priority} category={this.state.category} notes={this.state.notes} id={this.state.id} date={this.state.date} handleUpdate={this.handleUpdate} />} />
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