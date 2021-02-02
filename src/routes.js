import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from './pages/Home'

function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
            </Switch>
        </BrowserRouter>
    )
}

export default routes