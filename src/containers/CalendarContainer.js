import React from "react";
import {connect} from "react-redux"
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import {getTasks} from '../actions/TaskActions'

class CalendarContainer extends React.Component {

  componentDidMount(){
    this.props.dispatchTasks()
  }
  
  
    render() {
      console.log(this.props)
      let eventArray = this.props.tasks.map((task) => {
        return {title: task.title, date: task.date}
      }) 
    return (     
    <FullCalendar
      plugins={[ listPlugin ]}
      initialView="listWeek"
      events={eventArray}
    />)
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