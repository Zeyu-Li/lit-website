import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import {MainPage, Resume, PageNotFound, Secret} from './pages/pages'

export const Routes: React.FC = () => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route path='/secretsauce' component={Secret} />
                    <Route path='/resume' component={Resume} />
                    <Route path="/404" component={PageNotFound} />
                    <Route component={PageNotFound} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
