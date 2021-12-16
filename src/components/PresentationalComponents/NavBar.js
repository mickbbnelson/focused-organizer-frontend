import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <div className="center">
            <Link to='/' id="nav-link-home">Home</Link>
            <Link to='/tasks' id="nav-link-tasks">Tasks</Link>
            <Link to='/calendar' id="nav-link-calendar">Calendar</Link>
        </div>
    )
}

export default NavBar