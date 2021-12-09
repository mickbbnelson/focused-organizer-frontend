import React from 'react';
import { NavLink } from 'react-router-dom'

export default function NavBar() {

    return (
        <div id="nav-bar">
            <NavLink to='/' class="nav-link">Home</NavLink>
            <NavLink to='/tasks' class="nav-link">Tasks</NavLink>
            <NavLink to='/calendar' class="nav-link">Calendar</NavLink>
        </div>
    )
}