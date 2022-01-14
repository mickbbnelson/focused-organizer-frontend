const CalendarChange = (props) => {
  
    const calendarUpdate = (event) => {
      event.preventDefault();
      props.CalendarUpdate(event.target.value);
    } 
      
        return (
          <div className="center">
            <form onChange={calendarUpdate}>
              <label>Calendar View:</label>
              <select type="text" name="category" id="category-input"> 
                <option value="Week">Week</option>
                <option value="Month">Month</option>
              </select> 
            </form>
          </div>
          )
      }
  
  export default CalendarChange