import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'

const NotFound = () => (<h1>ERROR 404: NOT FOUND</h1>)

const App = () => (
  <BrowserRouter>
    <div className = "app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
