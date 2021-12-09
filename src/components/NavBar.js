import React from 'react';
import { NavLink } from 'react-router-dom'

export default function NavBar() {

    return (
        <div>
            <NavLink to='/tasks'>Tasks</NavLink>
            <NavLink to='/calendar'>Calendar</NavLink>
            <NavLink to='/'>Home</NavLink>
        </div>
    )
}