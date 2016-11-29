import React, { PropTypes } from 'react'
import {Router , Route, hashHistory, IndexRoute} from 'react-router'
import App from './App';
import home from './home';
import Blog from './Blog';
import Work from './Work';
import About from './About';

class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={home} />

          <Route path='blog' component={Blog} />
          <Route path='about' component={About} />
          <Route path='work' component={Work} />


        </Route>
      </Router>
    )
  }
}

export default Routers;
