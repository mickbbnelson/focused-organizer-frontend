import React from "react";
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

class CalendarContainer extends React.Component {
  
  
    render() {
    return (      
    <FullCalendar
      plugins={[ listPlugin ]}
      initialView="listWeek"
      events={[{title: 'test', date: '2021-12-09T12:30:00'}, {title: 'test 2', date: '2021-12-10T03:00:00'}]}
    />)
  }
}

export default CalendarContainer;