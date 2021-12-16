import { Switch, Route } from 'react-router-dom';
import TasksContainer from '../../containers/TasksContainer';
import CalendarContainer from '../../containers/CalendarContainer';
import Home from './About'
import TaskViewPage from '../TaskComponents/TaskViewPage'

const Pages = () => {
    return (
        <div>
        <Switch>
            <Route exact path="/tasks" component={routerProps => <TasksContainer routerProps={routerProps} />} />
            <Route path="/calendar" component={routerProps => <CalendarContainer routerProps={routerProps} />} />
            <Route path="/tasks/:id" component={routerProps => <TaskViewPage routerProps={routerProps} />} />
            <Route exact path="/" component={routerProps => <Home routerProps={routerProps} />} />
        </Switch>
        </div>
    )
}

export default Pages