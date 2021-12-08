import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TasksContainer from '../containers/TasksContainer';
import CalendarContainer from '../containers/CalendarContainer';
import Home from './Home'
import TaskViewCard from './TaskViewCard'
//import EditTaskForm from './EditTaskForm'

export default function Pages() {
    //const taskRoutes = '/tasks' || 'tasks/tasks'

    return (
        <Switch>
            <Route exact path="/tasks" component={routerProps => <TasksContainer routerProps={routerProps} />} />
            <Route path="/calendar" component={routerProps => <CalendarContainer routerProps={routerProps} />} />
            <Route path="/tasks/:id" component={routerProps => <TaskViewCard routerProps={routerProps} />} />
            <Route exact path="/" component={routerProps => <Home routerProps={routerProps} />} />
        </Switch>
    )
}