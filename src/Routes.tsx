import React, {useState, } from 'react'
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'

import {MainPage, PageNotFound, Secret} from './pages/pages'

export const Routes: React.FC = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route exact path='/secret' component={Secret} />
                <Route path="/404" component={PageNotFound} />
                <Redirect to="/404" />
            </Switch>
        </BrowserRouter>
    )
}
