import React from "react";
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';

class NavBar extends React.Component{
    render() {
        return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="/">CRM SYSTEM</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Products" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/products">Products</NavDropdown.Item>
                        <NavDropdown.Item href="/products-units">Products Units</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/departments">Departments</Nav.Link>
                    <Nav.Link href="/employees">Employees</Nav.Link>
                    <Nav.Link href="/customers">Customers</Nav.Link>
                    <Nav.Link href="/suppliers">Suppliers</Nav.Link>
                    <Nav.Link href="/invoices">Invoices</Nav.Link>
                    <Nav.Link href="/absenteeisms">Absenteeisms</Nav.Link>
                    <Nav.Link href="/forum">Forum</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search for a product" className="mr-sm-2" name={"name"} />
                    <Button href={"/products"} variant="outline-light">Search</Button>
                </Form>
                <Nav>
                    <NavDropdown title="Settings" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                        <NavDropdown.Item href="/forum/my-posts">My posts</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default NavBar;