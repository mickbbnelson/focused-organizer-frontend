import React from "react";
import { connect } from "react-redux"

class TaskViewCard extends React.Component {
    constructor(props){
    super(props)

    const foundTask = this.props.tasks.find(t => {return t.id === parseInt(this.props.routerProps.match.params.id)})
    
    this.state = {
        task: foundTask.task,
        priority: foundTask.priority,
        category: foundTask.category,
        notes: foundTask.notes
    }
    
    console.log(this.state)
}

    render(){
        console.log(this.props.tasks)
        console.log(this.props.routerProps.match.params.id)
        return (
            <div>
            <h1>Task Info</h1> 
            <h2></h2>   
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