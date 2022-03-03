import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello World </div>
        <Button>Hello</Button>
      </header>
    </div>
  );
}

export default App;
