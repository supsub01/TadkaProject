import App from './App';
import Button from 'react-bootstrap/Button';
import newRecipe from './newRecipe';
import { BrowserRouter, Link } from 'react-router-dom';
import './custom.scss';

function Home() {
  return (
    <div className="App">
        <header>
        <h1>Welcome to Tadka Project! 🍛</h1>
        <h2>Supriya, here are your recipes:</h2>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        
        <Button href={"newRecipe"} size="lg"  variant="outline-dark"> + ADD RECIPE</Button>
        <Button class="btn btn-primary btn-lg btn-block" variant="dark">WHAT SHOULD I EAT FOR DINNER?</Button>

        </header>
    </div>
  );
}

export default Home;
