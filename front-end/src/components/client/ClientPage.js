import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header';
import Footer from './Footer';
import Home from './Home'
import About from './About'

function ClientPage() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>

            <Footer />

        </div>
    )
}

export default ClientPage
