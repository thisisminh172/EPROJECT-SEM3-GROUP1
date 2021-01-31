import React from 'react'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'

function Header() {
    return (
        <div className="client-header">
            {/* start jumbotron */}
            <div className="client-banner jumbotron">
                <div className="container text-center">
                    <h1 className="client-banner-logo">YASH</h1>
                    <p>Gems &amp; Jewelleries</p>
                </div>
            </div>
            {/* end jumbotron */}
            {/* start navbar */}
            <div className="client-navbar">
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand href="/" className="logo">YASH</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"><span className="home-button">Home</span></Nav.Link>
                            <Nav.Link href="/products">All Jewelleries</Nav.Link>
                            <Nav.Link href="/products/ring">Rings</Nav.Link>
                            <Nav.Link href="/products/earring">Earrings</Nav.Link>
                            <Nav.Link href="/products/pendant">Pendants</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Form.Control type="text" placeholder="Search" htmlSize="45" className="mr-sm-2" />
                            <Button variant="outline-warning">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            {/* end navbar */}

        </div>
    )
}

export default Header
