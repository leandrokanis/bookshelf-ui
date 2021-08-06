import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { HomePage } from '@/pages'

export const ROUTES = {
  home: '/',
}

export const Router: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={ROUTES.home} exact component={HomePage} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Router
