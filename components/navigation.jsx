import Link from "next/link"
import { Fragment } from "react"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

export default function Navigation() {
    return (
        <>
        <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" 
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
        </head>
        <nav class="navbar navbar-dark bg-light">
            <a class="navbar-brand">ABC Stocks</a>
            <div class="form-inline" id="navbarNav">
                <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link active" href="/suppliers">Supplier Management</a>
                <a class="nav-item nav-link active" href="/suppliers/add">New Supplier</a>
            </div>
        </nav>
        </>
        
    );
}
