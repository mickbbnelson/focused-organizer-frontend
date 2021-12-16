import './App.css';
import Pages from './components/AppComponents/Pages';
import NavBar from './components/AppComponents/NavBar';

function App() {
  
  return (
    <div id="app">
      <NavBar />
      <div id="pages">
      <Pages />
      </div>
    </div>
  );
}

export default App;
