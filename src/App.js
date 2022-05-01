import logo from './logo.svg';
import './App.css';
import Navigations from './navigation/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Mardita vida</h2>{<Navigations/>}
      </header>
    </div>
  );
}

export default App;
