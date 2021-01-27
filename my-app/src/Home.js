import App from './App';
import Button from 'react-bootstrap/Button';
import newRecipe from './newRecipe';
import { BrowserRouter, Link } from 'react-router-dom';
import Custom from './custom.scss';

function Home() {
  return (
    <div className="App">
        <header className="App-header">
        <h1>Welcome to Tadka Project! 🍛</h1>
        <h2>Supriya, here are your recipes:</h2>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        
        <Link to={"newRecipe"} size="lg"  variant="outline-secondary">+ ADD RECIPE</Link>
        <Button class="btn btn-primary btn-lg btn-block" variant="dark">WHAT SHOULD I EAT FOR DINNER?</Button>

        </header>
    </div>
  );
}

export default Home;
