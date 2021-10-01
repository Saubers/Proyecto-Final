import {Route,Switch} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Catalogo from './components/Catalogo/Catalogo'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Contact from './components/Contacto/Contacto';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/home/catalogo" component={Catalogo}/>
        <Route exact path = "/home/:id" component= {ProductDetail}/>
        <Route path = "/contactos" component= {Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
