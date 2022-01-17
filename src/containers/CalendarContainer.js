import React from "react"
import {connect} from "react-redux"
import {getTasks} from '../actions/TaskActions'
import CalendarPage from '../components/CalendarComponents/CalendarPage'
import CalendarChange from '../components/CalendarComponents/CalendarChange'
import CalendarMonth from '../components/CalendarComponents/CalendarMonth'

class CalendarContainer extends React.Component {

  state = {
    calendarView: ''
  }

  componentDidMount(){
    this.props.dispatchTasks()
  }

  viewCalendar = (view) => {
    console.log(view)
    this.setState({
    calendarView: view.toString()
    })
  } 
  
    render() {
      console.log(this.state.calendarView)
      let eventArray = this.props.tasks.map((task) => {
        return {title: task.title, date: task.date}
      })

      let calendarFilter = () => {
        if (this.state.calendarView === "") {
          return <CalendarPage tasks={eventArray} />
        } else { return <CalendarMonth tasks={eventArray} />}
      }

      return (
      <div>
      <div> 
      <CalendarChange view={this.state.view} viewCalendar={this.viewCalendar} />
      </div>
      
      <div>
        {calendarFilter()}
      </div>
      
      </div>)

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
