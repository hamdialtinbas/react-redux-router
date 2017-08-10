import React from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
class App extends React.Component {

  render (){
    return (<div>

      <Header />
      <Main />

    </div> )
  }


}
export default App;
//{params.children}
