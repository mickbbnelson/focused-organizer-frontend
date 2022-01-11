import React from "react"
import {connect} from "react-redux"
import {getTasks} from '../actions/TaskActions'
import CalendarPage from '../components/CalendarComponents/CalendarPage'
import CalendarChange from '../components/CalendarComponents/CalendarChange'

class CalendarContainer extends React.Component {

  state = {
    view: ''
  }

  componentDidMount(){
    this.props.dispatchTasks()
  }
  
    render() {
      let eventArray = this.props.tasks.map((task) => {
        return {title: task.title, date: task.date}
      }) 
      if (this.state.view === '' || 'week') {
      return ( 
       <> 
       <CalendarChange />   
       <CalendarPage tasks={eventArray} />
       </>)
  }
}}

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