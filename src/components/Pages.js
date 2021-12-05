import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TasksContainer from '../containers/TasksContainer';
import CalendarContainer from '../containers/CalendarContainer';
import Home from './Home'

export default function Pages() {

    return (
        <Switch>
            <Route path="/tasks" component={routerProps => <TasksContainer routerProps={routerProps} />} />
            <Route path="/calendar" component={routerProps => <CalendarContainer routerProps={routerProps} />} />
            <Route path="/" component={routerProps => <Home routerProps={routerProps} />} />
        </Switch>
    )
}