import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Catalogo from './components/Catalogo/Catalogo';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Contact from './components/Contacto/Contacto';
import LandingPage from './components/LandingPage/LandingPage';
import Register from './components/Auth/register/Register';
import Cart from './components/Cart/Cart';
import Login from './components/Auth/login/Login';

import ProductCRUD from './components/ProductCRUD/ProductCRUD.jsx';
import CreateProduct from './components/ProductCRUD/CRUD_Components/CreateProduct/CreateProduct';
import UpdateProduct from './components/ProductCRUD/CRUD_Components/UpdateProduct/UpdateProduct';
import DeleteProduct from './components/ProductCRUD/CRUD_Components/DeleteProduct/DeleteProduct';
import ReadProduct from './components/ProductCRUD/CRUD_Components/ReadProduct/ReadProduct';
import ReadProductDetail from './components/ProductCRUD/CRUD_Components/ReadProduct/ReadProductDetail';

import CategoryCRUD from './components/CategoryCRUD/CategoryCRUD'
import CategoryCreate from './components/CategoryCRUD/CategoryCreate/CategoryCreate';
import CategoryUpdate from './components/CategoryCRUD/CategoryUpdate/CategoryUpdate';
import CategoryDelete from './components/CategoryCRUD/CategoryDelete/CategoryDelete';
import CategoryRead from './components/CategoryCRUD/CategoryRead/CategoryRead'

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

          {isAdmin?.toString() === 'true' && <Route exact path="/CategoryCRUD" component={CategoryCRUD} />}
          {isAdmin?.toString() === 'true' && <Route exact path="/CategoryCRUD/CrearCategoria" component={CategoryCreate} />}
          {isAdmin?.toString() === 'true' && <Route exact path="/CategoryCRUD/CategoryUpdate" component={CategoryUpdate} />}
          {isAdmin?.toString() === 'true' && <Route exact path="/CategoryCRUD/CategoryDelete" component={CategoryDelete} />}
          {isAdmin?.toString() === 'true' && <Route exact path="/CategoryCRUD/CategoryRead" component={CategoryRead} />}

          {isAdmin?.toString() === 'true' && <Route exact path='/ProductCRUD' component={ProductCRUD} />}
          {isAdmin?.toString() === 'true' && <Route exact path='/ProductCRUD/CreateProduct' component={CreateProduct} />}
          {isAdmin?.toString() === 'true' && <Route exact path='/ProductCRUD/DeleteProduct' component={DeleteProduct} />}
          {isAdmin?.toString() === 'true' && <Route exact path='/ProductCRUD/UpdateProduct' component={UpdateProduct} />}
          {isAdmin?.toString() === 'true' && <Route exact path='/ProductCRUD/ReadProduct' component={ReadProduct} />}
          {isAdmin?.toString() === 'true' && <Route exact path='/ProductCRUD/ReadProduct/:id' component={ReadProductDetail} />}

          {!local && (<Route exact path='/user/register' component={Register} />)}
          <Route exact path="/home/Catalogo" component={Catalogo} />
          {!local && (<Route exact path="/user/login" component={Login} />)}
          {local && (<Route exact path='/user/profile' component={Profile} />)}
          {(<Route exact path='/home/compra' component={Cart} />)}
          <Route exact path='/home/ADMIN/orders' component={OrderCar} />
          <Route exact path="/contactos" component={Contact} />
          <Route path="/pagos" component={Pagos} />
        </Switch >
      </div >
    </Router >
  );
}

export default App;
