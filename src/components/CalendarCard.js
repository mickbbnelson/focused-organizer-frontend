import React from 'react';
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'

const CalendarCard = (props) => {
    let eventArray = props.tasks.map((task) => {
      return {title: task.title, date: task.date}
    }) 

    return (     
        <FullCalendar
          plugins={[ listPlugin ]}
          initialView="listWeek"
          events={eventArray}
        />)
}

export default CalendarCard;