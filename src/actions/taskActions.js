export const getTasks = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/tasks')
        .then(response => response.json())
        .then(data => dispatch({type: "GET_TASKS", payload: data}))
}}
