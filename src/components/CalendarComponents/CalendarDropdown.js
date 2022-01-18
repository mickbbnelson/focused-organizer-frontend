const CalendarChange = (props) => {
  
    const calendarUpdate = (event) => {
      event.preventDefault();
      props.updateCalendar(event.target.value);
    } 
      
        return (
          <div className="center">
            <form onChange={calendarUpdate}>
              <label>Calendar View:</label>
              <select type="text" name="category" id="category-input"> 
                <option value="">Week</option>
                <option value="Month">Month</option>
              </select> 
            </form>
          </div>
          )
      }
  
  export default CalendarChange