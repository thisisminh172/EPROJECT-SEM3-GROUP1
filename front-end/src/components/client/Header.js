import React from 'react'
import { Navbar, Nav, Button, Form, NavDropdown, FormControl } from 'react-bootstrap'
function Header() {
    return (
        <div className="header-background">
            <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="/" expand="lg">YASH</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/products/ring">RINGS</Nav.Link>
                        <Nav.Link href="/products/earing">EARRINGS</Nav.Link>
                        <Nav.Link href="/products/pendant">PENDANTS</Nav.Link>
                        <Nav.Link href="/products">ALL JEWELLRY</Nav.Link>
                        <Nav.Link href="/about">ABOUT</Nav.Link>
                        <Nav.Link href="/education">EDUCATION</Nav.Link>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
