import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'

const CalendarPage = (props) => {
    return (     
        <FullCalendar
          plugins={[ listPlugin ]}
          initialView="listWeek"
          events={props.tasks}
        />)
}

export default CalendarPage;