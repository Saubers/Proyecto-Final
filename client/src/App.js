import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Catalogo from './components/Catalogo/Catalogo';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Contact from './components/Contacto/Contacto';
import LandingPage from './components/LandingPage/LandingPage';
import CategoryCreate from './components/CategoryCreate/CategoryCreate';
import Register from './components/Auth/register/Register';
import Cart from './components/Cart/Cart';
import Login from './components/Auth/login/Login';
import CRUD from './components/ProductCRUD/CRUD.jsx';
import CreateProduct from './components/ProductCRUD/CRUD_Components/CreateProduct/CreateProduct';
import UpdateProduct from './components/ProductCRUD/CRUD_Components/UpdateProduct/UpdateProduct';
import DeleteProduct from './components/ProductCRUD/CRUD_Components/DeleteProduct/DeleteProduct';
import OrderCar from './components/OrderCars/OrderCar';
function App() {
 
  const local = localStorage.getItem('userInfo')
  return (
    <Router>
      <div className='container'>
      <Switch>
{ !local && ( <Route exact path="/" component={LandingPage} />)}
        <Route exact path="/home/Catalogo/:id" component={ProductDetail} />
        <Route exact path="/home/CrearCategoria" component={CategoryCreate} />
        <Route exact path='/CRUD' component={CRUD} />
        <Route exact path='/CRUD/CreateProduct' component={CreateProduct} />
        <Route exact path='/CRUD/DeleteProduct' component={DeleteProduct} />
        <Route exact path='/CRUD/UpdateProduct' component={UpdateProduct} />
{ !local && (<Route exact path='/user/register' component={Register} />)}
        <Route exact path="/home/Catalogo" component={Catalogo} />
{ !local &&  (<Route exact path="/user/login" component={Login} />)}
{ local && ( <Route exact path='/home/compra' component={Cart} />)}
        <Route exact path='/home/ADMIN/orders' component={OrderCar}/>
        <Route exact path="/contactos" component={Contact} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
