import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router,Route,browserHistory } from 'react-router';
import ItemList from './components/ItemList';
import { BrowserRouter } from 'react-router-dom';
import Root from './components/Root';
const store = configureStore();

render(
    (<Root store={store} />),
    document.getElementById('app')
);
