import {Route,Switch} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Catalogo from './components/Catalogo/Catalogo'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Contact from './components/Contacto/Contacto';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import ProductCRUD from './components/ProductCRUD/ProductCRUD';
import ProductCRUDDELETE from './components/ProductCRUD/ProductCRUDDELETE';
import { useFirebaseApp } from 'reactfire';

function App() {
  const firebase = useFirebaseApp;
  console.log(firebase)
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/home/catalogo" component={Catalogo}/>
        <Route exact path= "/home/:id" component= {ProductDetail}/>
        <Route exact path= '/home/Catalogo/CRUD' component= {ProductCRUD}/>
        <Route exact path= '/home/Catalogo/CRUD/DELETE' component= {ProductCRUDDELETE}/>
        <Route path = "/contactos" component= {Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
