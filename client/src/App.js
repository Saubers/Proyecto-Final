import {Route,Switch} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Catalogo from './components/Catalogo/Catalogo'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Catalogo}/>
      </Switch>
    </Router>
  );
}

export default App;
