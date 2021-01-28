import Home from './Home';
import newRecipe from './newRecipe';
import recipePage from './recipePage';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
          <Route exact path="/" component={Home}/>
          <Route exact path="/newRecipe" component={newRecipe}/>
          <Route exact path="/recipePage" component={recipePage}/> 
    </div>
  );
}

export default App;
