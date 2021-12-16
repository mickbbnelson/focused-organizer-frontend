import { Switch, Route } from 'react-router-dom';
import TasksContainer from '../../containers/TasksContainer';
import CalendarContainer from '../../containers/CalendarContainer';
import About from './About'
import TaskViewPage from '../../containers/TaskViewContainer'

const Pages = () => {
    return (
        <div>
        <Switch>
            <Route exact path="/tasks" component={routerProps => <TasksContainer routerProps={routerProps} />} />
            <Route path="/calendar" component={routerProps => <CalendarContainer routerProps={routerProps} />} />
            <Route path="/tasks/:id" component={routerProps => <TaskViewPage routerProps={routerProps} />} />
            <Route exact path="/" component={routerProps => <About routerProps={routerProps} />} />
        </Switch>
        </div>
    )
}

export default Pages