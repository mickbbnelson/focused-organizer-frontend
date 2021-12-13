import './App.css';
import Pages from './components/PresentationalComponents/Pages';
import NavBar from './components/PresentationalComponents/NavBar';

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
