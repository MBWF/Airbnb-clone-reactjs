import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from './pages/Home'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes