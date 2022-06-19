import logo from './logo.svg';
import './App.css';
import Text from './components/Text';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Text text={'lol'}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Text text={'lol2'} defaultParameter={'100'} />
      </header>
    </div>
  );
}

export default App;
