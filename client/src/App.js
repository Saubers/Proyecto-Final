import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Catalogo from './components/Catalogo/Catalogo';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Contact from './components/Contacto/Contacto';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import CategoryCreate from './components/CategoryCreate/CategoryCreate';
import Register from './components/Auth/register/Register';
import Cart from './components/Cart/Cart';
import Login from './components/Auth/login/Login';
import CRUD from './components/ProductCRUD/CRUD.jsx';
import CreateProduct from './components/ProductCRUD/CRUD_Components/CreateProduct/CreateProduct';
import UpdateProduct from './components/ProductCRUD/CRUD_Components/UpdateProduct/UpdateProduct';
import DeleteProduct from './components/ProductCRUD/CRUD_Components/DeleteProduct/DeleteProduct';

function App() {
  return (
    <Router>
      <div className='container'>
      <Switch>
        {/* <Route exact path="/" component={LandingPage} /> */}
        <Route exact path="/home" component={LandingPage} />
        <Route exact path="/home/Catalogo" component={Catalogo} />
        <Route exact path="/home/Catalogo/:id" component={ProductDetail} />
        <Route exact path="/home/CrearCategoria" component={CategoryCreate} />
        <Route exact path='/CRUD' component={CRUD} />
        <Route exact path='/CRUD/CreateProduct' component={CreateProduct} />
        <Route exact path='/CRUD/DeleteProduct' component={DeleteProduct} />
        <Route exact path='/CRUD/UpdateProduct' component={UpdateProduct} />
        <Route exact path='/user/register' component={Register} />
        <Route exact path="/user/login" component={Login} />
        <Route exact path='/home/compra' component={Cart} />
        <Route exact path="/contactos" component={Contact} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
