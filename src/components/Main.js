import {Switch,
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import Body from './Body'
import Body1 from './Body1'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/Body' component={Body}/>
      <Route path='/Body1' component={Body1}/>
    </Switch>
  </main>
)
