import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TasksContainer from '../containers/TasksContainer';
import CalendarContainer from '../containers/CalendarContainer';
import Home from './Home'

export default function Pages() {

    return (
        <Switch>
            <Route path="/tasks" component={TasksContainer} />
            <Route path="/calendar" component={CalendarContainer} />
            <Route path="/" component={Home} />
        </Switch>
    )
}