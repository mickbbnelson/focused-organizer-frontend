export const getTasks = () => {
    return (dispatch) => {          //dispatch comes from thunk middleware
        fetch('http://localhost:3000/tasks')
        .then(response => response.json())
        .then(data => dispatch({type: "GET_TASKS", payload: data}))
}}


export const addTask = (task) => {
    const configObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(task)
    }

    return (dispatch) => {
        fetch('http://localhost:3000/tasks', configObject)
        .then(response => response.json())
        .then(data => dispatch({type: "ADD_TASK", payload: data}))
    }
}

export const deleteTask = (taskId) => {
    const configObject = {
        method: "DELETE"
    }

    return (dispatch) => {
        fetch(`http://localhost:3000/tasks/${taskId}`, configObject)
        .then(response => response.json())
        .then(data => dispatch({type: "DELETE_TASK", payload: data}))
    }

}