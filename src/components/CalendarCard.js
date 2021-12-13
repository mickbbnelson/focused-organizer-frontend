import React from 'react';
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'

const CalendarCard = (props) => {

    return (     
        <FullCalendar
          plugins={[ listPlugin ]}
          initialView="listWeek"
          events={props.tasks}
        />)
}

export default CalendarCard;