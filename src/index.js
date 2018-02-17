import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated } from './util/wrappers.js'

// Layouts
import App from './App'
import Home from './layouts/home/Home'
import Dashboard from './layouts/dashboard/Dashboard'
import New from './layouts/contract/New'
import Edit from './layouts/contract/Edit'
import Complete from './layouts/contract/Complete'
import Profile from './user/layouts/profile/Profile'


// Redux Store
import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="dashboard" component={UserIsAuthenticated(Dashboard)} />
          <Route path="new" component={New} />
          <Route path="edit" component={Edit} />
          <Route path="complete" component={Complete} />
          <Route path="profile" component={UserIsAuthenticated(Profile)} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
