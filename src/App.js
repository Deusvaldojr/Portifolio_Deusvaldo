import logo from './componentes/img/logo1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <br/>
        <br/>
        <p>
          Portifólio
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/deusvaldo-junior-807ba6b4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deusvaldo Junior
        </a>
      </header>
    </div>
  );
}

export default App;
