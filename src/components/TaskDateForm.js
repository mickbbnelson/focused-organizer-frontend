import React from "react";

class TaskDateForm extends React.Component {

  state = {
    date: ''
  }

  handleChange = (event) => {
   this.setState({
       date: event.target.value
   })
  }

  componentDidUpdate(){
    let eventDate = new Date(this.state.date)
    console.log(eventDate.toISOString());
  }

    render() {
    return (
      <div>
        <label htmlFor="date-input">Date:</label>
            <input type="text" name="date" id="date-input" onChange={this.handleChange} value={this.state.date} />
      </div>
    );
  }
}

export default TaskDateForm;