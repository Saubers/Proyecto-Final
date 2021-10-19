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
import { useHistory } from 'react-router';
import Profile from './components/ProfileInfo/Profile';
import Pagos from './components/pagos/pagos'
import OrderDetail from './components/OrderCars/OrderDetail/OrderDetail';

function App() {
  const history = useHistory()
const local = localStorage.getItem('userInfo')
const isAdmin = localStorage.getItem('userAdmin')
  return (
    <Router>
      <div className='container'>
      <Switch>
 <Route exact path="/" component={LandingPage} />
        <Route exact path="/home/Catalogo/:id" component={ProductDetail} />
        <Route exact path="/home/CrearCategoria" component={CategoryCreate} />
   { isAdmin === 'admin' &&  (<Route exact path='/CRUD' component={CRUD} />)
   
  }
      { isAdmin === 'admin' && <Route exact path='/CRUD/CreateProduct' component={CreateProduct} />}
      { isAdmin === 'admin' && <Route exact path='/CRUD/DeleteProduct' component={DeleteProduct} />}
      { isAdmin === 'admin' && <Route exact path='/CRUD/UpdateProduct' component={UpdateProduct} />}
{ !local && (<Route exact path='/user/register' component={Register} />)}
        <Route exact path="/home/Catalogo" component={Catalogo} />
{ !local &&  (<Route exact path="/user/login" component={Login} />)}
{local && (<Route exact path='/user/profile' component={Profile} />)}
{    ( <Route exact path='/home/compra' component={Cart} />)}
        <Route exact path='/home/ADMIN/orders' component={OrderCar}/>
        <Route exact path='/home/ADMIN/orders/:id' component={OrderDetail}/>
        <Route exact path="/contactos" component={Contact} />
        <Route path="/pagos" component={Pagos} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
