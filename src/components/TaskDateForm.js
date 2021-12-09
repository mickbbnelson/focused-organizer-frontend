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

    render() {
    return (
      <div>
        <form>
        <label htmlFor="date-input">Date:</label>
            <input type="text" name="date" id="date-input" onChange={this.handleChange} value={this.state.date} />
        </form>
      </div>
    );
  }
}

export default TaskDateForm;