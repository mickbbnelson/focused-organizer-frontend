import './App.css';
import Pages from './components/Pages';
import NavBar from './components/NavBar';

function App() {
  
  return (
    <div id="app">
      <NavBar />
      <div id="pages">
      <h1>Lets Get Organized!</h1>
      <Pages />
      </div>
    </div>
  );
}

export default App;
