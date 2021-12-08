import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
//import interactionPlugin from '@fullcalendar/interaction'
//import '../app.css'

class CalendarContainer extends React.Component {
  
  
    render() {
    return (      
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
    />)
  }
}

export default CalendarContainer;