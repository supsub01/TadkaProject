import Home from './Home';
import newRecipe from './newRecipe';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
          <Route exact path="/" component={Home}/>
          <Route exact path="/newRecipe" component={newRecipe}/> 
    </div>
  );
}

export default App;
