import './App.css';
import Cocktail from './component/Cocktail'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './component/About';
import Lists from './component/Lists';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/'>
             <Cocktail/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/lists/:idDrink'>
          <Lists/>
        </Route>
      </Switch>
    </div>
      </Router>
  );
}

export default App;
