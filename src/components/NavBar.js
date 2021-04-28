import React from "react";
import {Navbar, Nav, Form, FormControl, Button, NavDropdown, Image} from 'react-bootstrap';

class NavBar extends React.Component{
    render() {
        return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="/">CRM SYSTEM</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Products" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/products">Products</NavDropdown.Item>
                        <NavDropdown.Item href="#products-units">Products Units</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#invoices">Invoices</Nav.Link>
                    <Nav.Link href="#suppliers">Suppliers</Nav.Link>
                    <Nav.Link href="#departments">Departments</Nav.Link>
                    <Nav.Link href="#absenteeisms">Absenteeisms</Nav.Link>
                    <Nav.Link href="#forum">Forum</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
                <Nav>
                    <NavDropdown title="Settings" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">My posts</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
                <Image src="profile_male.svg/20x20" roundedCircle />
        </Navbar>
        )
    }
}

export default NavBar;