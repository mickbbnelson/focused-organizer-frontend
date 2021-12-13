import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <div className="center">
            <NavLink to='/' id="nav-link-home">Home</NavLink>
            <NavLink to='/tasks' id="nav-link-tasks">Tasks</NavLink>
            <NavLink to='/calendar' id="nav-link-calendar">Calendar</NavLink>
        </div>
    )
}

export default NavBar