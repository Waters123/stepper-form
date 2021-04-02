import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Home } from './home'
import { Router } from './router'

export function Pages() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Router.home} component={Home} />
        <Redirect to="/dashboard" />
      </Switch>
    </BrowserRouter>
  )
}
