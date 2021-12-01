import './App.css';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Lets Get Organized!</h1>
      <Switch>
        <Route path="/tasks" component={TasksContainer} />

      </Switch>
    </div>
  );
}

export default App;
