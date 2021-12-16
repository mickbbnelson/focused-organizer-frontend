const TaskViewDisplay = ({title, priority, category, notes, date}) => {

    return (
        <div id="view-card">
           <div className="center">
            <h1 className="center">{title}</h1> 
            <p>Priority: {priority}</p> 
            <p>Category: {category}</p> 
            <p>Notes: {notes}</p> 
            {date ? <p>Date: {date.split("T")[0]}</p> : null}
            </div>
        </div>
    )
}

export default TaskViewDisplay;