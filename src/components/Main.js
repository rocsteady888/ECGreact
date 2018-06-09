import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ActionPotential from './ActionPotential'
import DrugsAndElectrolytes from './DrugsAndElectrolytes'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route path='/action-potential' component={ActionPotential} />
      <Route path='/drugs-and-electrolytes' component={DrugsAndElectrolytes} />
    </Switch>
  </main>
)

export default Main;