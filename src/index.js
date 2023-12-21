import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Page from './views/page'
import VersatileB1 from './views/versatile-b1'
import VersatileA from './views/versatile-a'
import VersatileB from './views/versatile-b'
import ImageTest from './views/image-test'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Page} exact path="/" />
        <Route component={VersatileB1} exact path="/versatile-b1" />
        <Route component={VersatileA} exact path="/versatile-a" />
        <Route component={VersatileB} exact path="/versatile-b" />
        <Route component={ImageTest} exact path="/image-test" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
