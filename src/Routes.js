import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NewPage from './pages/NewPage'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/new" component={NewPage} />
      </Switch>
    </div>
  )
}

export default Routes
