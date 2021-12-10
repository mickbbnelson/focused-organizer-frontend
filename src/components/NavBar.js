import React from 'react';
import { NavLink } from 'react-router-dom'

export default function NavBar() {

    return (
        <div class="center">
            <NavLink to='/' id="nav-link-home">Home</NavLink>
            <NavLink to='/tasks' id="nav-link-tasks">Tasks</NavLink>
            <NavLink to='/calendar' id="nav-link-calendar">Calendar</NavLink>
        </div>
    )
}