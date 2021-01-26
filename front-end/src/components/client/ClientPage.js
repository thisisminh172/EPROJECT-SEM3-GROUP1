import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import '../../public/css/clientStyle.css'


import Header from './Header';
import Footer from './Footer';
import Home from './Home'
import About from './About'
import Products from './Products';
import Product from './Product';
import Education from './Education'

function ClientPage() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <Header />
                        <div className="section">

                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/about" component={About} />
                                <Route exact path="/products" component={Products} />
                                <Route exact path="/products/:type" component={Products} />
                                <Route path="/products/:type/:id" component={Product} />
                                <Route path="/education" component={Education} />
                            </Switch>
                        </div>

                        <Footer />

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ClientPage
