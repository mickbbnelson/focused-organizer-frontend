import React from "react";
import { connect } from "react-redux"
import EditTaskForm from "./EditTaskForm"
import { Switch, Route, Link } from 'react-router-dom';


class TaskViewCard extends React.Component {
    constructor(props){
    super(props)

    const foundTask = this.props.tasks.find(t => {return t.id === parseInt(this.props.routerProps.match.params.id)})
    
    this.state = {
        task: foundTask.task,
        priority: foundTask.priority,
        category: foundTask.category,
        notes: foundTask.notes,
        id: foundTask.id
    }
    
    console.log(this.state)
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
                <Route path="/tasks/:id/edit" component={routerProps => <EditTaskForm routerProps={routerProps} task={this.state.task} priority={this.state.priority} category={this.state.category} notes={this.state.notes} id={this.state.id}/>} />
            </Switch>
            <Link to={viewLink} >
            <button>Edit</button>
            </Link>
            </div>  
        )
    }
}

function mapStateToProps(state){
    return {
      tasks: state
    }
  }

export default connect(mapStateToProps)(TaskViewCard)