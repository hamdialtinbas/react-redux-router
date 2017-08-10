import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import App from './App';
import Body from './Body';
import Body1 from './Body1';
import Header from './Header';
const Root = ({ store }) => (
  <Provider store={store}>
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
    </div>
 </HashRouter >
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;

/*
<Route path="dashboard" component={Dashboard} />
<Route path="users" component={Users} />

*/
