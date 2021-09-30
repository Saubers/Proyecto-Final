import {Route,Switch} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Catalogo from './components/Catalogo/Catalogo'
import ProductCard from './components/ProductCard/ProductCard'


function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Catalogo}/>
        <Route path = "/home/:id" component= {ProductCard}/>
      </Switch>
    </Router>
  );
}

export default App;
