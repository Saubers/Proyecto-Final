import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {store} from './store/index'
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase-config';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
  <Provider store={store}>
    
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    </Provider>
    </FirebaseAppProvider>,
  document.getElementById('root')
);

