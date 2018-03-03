import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import rootReducers from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
  
import Home from './App';
import Patients from './components/patients.js';
import Forms from './components/forms.js';
import PatientDetails from './components/patientDetails.js';
import Navigation from './components/navigation.js';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Router>
      <div>
        <Navigation />
        <Route path='/' component={Home} exact/>
        <Route path='/patients' component={Patients} exact />
        <Route path='/forms' component={Forms} />
        <Route path='/patients/:id/forms' component={PatientDetails} />
      </div>
    </Router>
  </Provider>, 
  document.getElementById('root')
);

