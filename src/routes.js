// Define routes.
// The react-router-dom package handles most of this for us.
// Export: A function returning a Router object
import React from 'react';
import {Route, Router} from 'react-router-dom';

import App from './App';
import Home from './Components/Home/Home.js';
import Sheets from './Components/Sheets/Sheets.js';

import history from './history';

import './App.css';


export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path="/" render={props => <App {...props} />} />
        <div className="Page container">
          <Route
            path="/home"
            render={props => <Home {...props} />}
          />
          <Route
            path="/sheets"
            render={props => <Sheets {...props} />}
          />
        </div>
      </div>
    </Router>
  );
};
