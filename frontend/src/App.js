import logo from './logo.svg';
import './App.css';
import RecipeTile from './components/recipe-tile/'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subdomain
        </a>
        <RecipeTile />
        Subdomain
      </header>
    </div>
  );
}

export default App;
