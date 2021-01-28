import Button from 'react-bootstrap/Button';
import newRecipe from './newRecipe';
import { BrowserRouter, Link } from 'react-router-dom';
import './custom.scss';

function Home() {
  return (
    <div className="App">
        <header>
        <h1>Welcome to Tadka Project! 🍛</h1>
        <h2>Supriya, here's how to make -recipeName-:</h2>
        
        </header>
    </div>
  );
}

export default Home;
