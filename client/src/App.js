import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Catalogo from './components/Catalogo/Catalogo';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Contact from './components/Contacto/Contacto';
import LandingPage from './components/LandingPage/LandingPage';
import Register from './components/Auth/register/Register';
import Cart from './components/Cart/Cart';
import Login from './components/Auth/login/Login';

import ProductCRUD from './components/ProductCRUD/ProductCRUD'
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
import Pagos from './components/pagos/pagos'
import OrderDetail from './components/OrderCars/OrderDetail/OrderDetail';
import ProfileInfo from './components/UserInfo/UserInfo'
import AdministracionAdmin from './components/AdministracionAdmin/AdministracionAdmin'
import { useSelector } from 'react-redux';
import OrderEdit from './components/OrderCars/OrderEdit/OrderEdit'
function App() {
  const history = useHistory()
  const stateAdmin = useSelector((state) => state.userInfo)
  const local = localStorage.getItem('userInfo')
  const isAdmin = localStorage.getItem('userAdmin')
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home/Catalogo/:id" component={ProductDetail} />


          {isAdmin === '"admin"' && <Route exact path='/ProductCRUD' component={ProductCRUD} />}
          {isAdmin === '"admin"' && <Route exact path='/ProductCRUD/CreateProduct' component={CreateProduct} />}
          {isAdmin === '"admin"' && <Route exact path='/ProductCRUD/DeleteProduct' component={DeleteProduct} />}
          {isAdmin === '"admin"' && <Route exact path='/ProductCRUD/UpdateProduct' component={UpdateProduct} />}
          {isAdmin === '"admin"' && <Route exact path='/ProductCRUD/ReadProduct' component={ReadProduct} />}
          {isAdmin === '"admin"' && <Route exact path='/ProductCRUD/ReadProduct/:id' component={ReadProductDetail} />}

          {/*  <Route exact path='/ProductCRUD' component={ProductCRUD} />
          <Route exact path='/ProductCRUD/CreateProduct' component={CreateProduct} />
          <Route exact path='/ProductCRUD/DeleteProduct' component={DeleteProduct} />
          <Route exact path='/ProductCRUD/UpdateProduct' component={UpdateProduct} />
          <Route exact path='/ProductCRUD/ReadProduct' component={ReadProduct} />
          <Route exact path='/ProductCRUD/ReadProduct/:id' component={ReadProductDetail} /> */}


          {isAdmin === '"admin"' && <Route exact path="/CategoryCRUD" component={CategoryCRUD} />}
          {isAdmin === '"admin"' && <Route exact path="/CategoryCRUD/CrearCategoria" component={CategoryCreate} />}
          {isAdmin === '"admin"' && <Route exact path="/CategoryCRUD/CategoryUpdate" component={CategoryUpdate} />}
          {isAdmin === '"admin"' && <Route exact path="/CategoryCRUD/CategoryDelete" component={CategoryDelete} />}
          {isAdmin === '"admin"' && <Route exact path="/CategoryCRUD/CategoryRead" component={CategoryRead} />}


          {/* <Route exact path="/CategoryCRUD" component={CategoryCRUD} />
          <Route exact path="/CategoryCRUD/CrearCategoria" component={CategoryCreate} />
          <Route exact path="/CategoryCRUD/CategoryUpdate" component={CategoryUpdate} />
          <Route exact path="/CategoryCRUD/CategoryDelete" component={CategoryDelete} />
          <Route exact path="/CategoryCRUD/CategoryRead" component={CategoryRead} /> */}


          {!local && (<Route exact path='/user/register' component={Register} />)}
          <Route exact path="/home/Catalogo" component={Catalogo} />
          {!local && (<Route exact path="/user/login" component={Login} />)}
          {(<Route exact path='/home/compra' component={Cart} />)}
          <Route exact path='/home/ADMIN/orders' component={OrderCar} />
          {local && <Route exact path='/user/me' component={ProfileInfo} />}
          {isAdmin === '"admin"' &&<Route exact path='/home/ADMIN/edit/:id' component={OrderEdit} />}
          {isAdmin === '"admin"' &&<Route exact path='/home/ADMIN/orders/:id' component={OrderDetail} />}
          <Route exact path="/contactos" component={Contact} />
          <Route path="/pagos" component={Pagos} />
          {isAdmin === '"admin"' &&<Route exact path='/home/ADMIN/Administracion' component={AdministracionAdmin}/>}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
