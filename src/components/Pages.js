import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TasksContainer from '../containers/TasksContainer';
import CalendarContainer from '../containers/CalendarContainer';
import Home from './Home'
import EditTaskForm from './EditTaskForm'

export default function Pages() {

    return (
        <Switch>
            <Route exact path="/tasks" component={routerProps => <TasksContainer routerProps={routerProps} />} />
            <Route path="/calendar" component={routerProps => <CalendarContainer routerProps={routerProps} />} />
            <Route path="/tasks/:id/edit" component={routerProps => <EditTaskForm routerProps={routerProps} />} />
            <Route path="/" component={routerProps => <Home routerProps={routerProps} />} />
        </Switch>
    )
}