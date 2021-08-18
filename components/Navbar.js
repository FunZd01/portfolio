import Link from "next/link";
import { Navbar, Container } from 'react-bootstrap';
import { useState } from 'react';

const Navbars = () => (
        <Navbar bg="info" className={"rounded border-bottom border-light"} style={{ height: "10vh" }} expand="lg" fixed={"top"}>
            <Container>
                <Link href="/">
                    <Navbar.Brand><a>Domingo Funez</a></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={"border border-dark rounded"} />
                <Navbar.Collapse id="basic-navbar-nav" className={"justify-content-end"}>
                    <ul className="navbar-nav bg-info p-2">
                        <li className="nav-item">
                            <Link href={"/"}>
                                <a className="nav-link p-2 b-3 active"
                                    style={{ boxShadow: "3px 4px 5px" }}>Inicio</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"/about"}>
                                <a className="nav-link p-2 b-3 active" style={{ boxShadow: "3px 4px 5px" }}>CV</a>
                            </Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
export default Navbars;
