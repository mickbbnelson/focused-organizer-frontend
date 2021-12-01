import './App.css';
import { Switch, Route } from 'react-router-dom';
import TasksContainer from './containers/TasksContainer';
import CalendarContainer from './containers/CalendarContainer';
import Home from './Home'

function App() {
  return (
    <div>
      <h1>Lets Get Organized!</h1>
      <Switch>
        <Route path="/tasks" component={TasksContainer} />
        <Route path="/calendar" component={CalendarContainer} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
