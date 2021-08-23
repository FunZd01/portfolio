import { Navbar, Container } from 'react-bootstrap';
import { useState } from 'react';
import Link from '../components/Enlace.js'

const Navbars = () => (
        <Navbar bg="secondary" className={"rounded border-bottom border-dark"} style={{ height: "10vh" }} expand="lg" fixed={"top"}>
           <Container>
                <Link href="/">
                    <Navbar.Brand>Domingo Funez</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={"border border-dark rounded"} />
                <Navbar.Collapse id="basic-navbar-nav" className={"justify-content-end"}>
                    <ul className="navbar-nav p-2 bg-secondary hoverable" style={{opacity: '0.6'}}>
                        <li className="nav-item">
                            <Link activeClassName='active' href='/'>
                              <a className='nav-link p-2 b-3'>Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClassName='active' href='/about'>
                              <a className='nav-link p-2 b-3'>datos</a>
                            </Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
export default Navbars;
