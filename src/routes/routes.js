import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Portifolio from '../pages/portifolio'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/portifolio' component={Portifolio} />
            </Switch>
        </BrowserRouter>
    )
}