import Link from "next/link";
import {Navbar, Container} from 'react-bootstrap';

const Navbars = () => (
    <Navbar bg="info" className={"rounded border-bottom border-light"} style={{height:"10vh"}} expand="lg" fixed={"top"}>
        <Container>
            <Link href="/">
                <Navbar.Brand><a>Portfolio</a></Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className={" justify-content-end"}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href={"/"}>
                            <a className="nav-link">Inicio</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href={"/about"}>
                            <a className="nav-link">CV</a>
                        </Link>
                    </li>
                </ul>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default Navbars;
