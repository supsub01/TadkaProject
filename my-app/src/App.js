import Button from 'react-bootstrap/Button';
//import logo from './logo.svg';
//import './App.css';
import './custom.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Tadka Project! 🍛</h1>
        <h2>Supriya, here are your recipes:</h2>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <Button size="lg" variant="dark">WHAT SHOULD I EAT FOR DINNER?</Button>

      </header>
    </div>
  );
}

export default App;
