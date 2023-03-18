import Link from "next/link"
import { Fragment } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

const Navigation = () => {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>ABC Stocks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/suppliers">Supplier Management</Nav.Link>
                    <Nav.Link href="/suppliers/add">New Supplier</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </Fragment>
    )
}
export default Navigation