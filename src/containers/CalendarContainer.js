import React from "react";
import {connect} from "react-redux"
import {getTasks} from '../actions/TaskActions'
import CalendarCard from '../components/CalendarCard'

class CalendarContainer extends React.Component {

  componentDidMount(){
    this.props.dispatchTasks()
  }
  
    render() {
      console.log(this.props)
      return (     
       <CalendarCard tasks={this.props.tasks} />)
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

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);