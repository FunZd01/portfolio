import '../styles/Home.module.css'
import Link from "next/link";
import {Navbar, Nav, Container} from 'react-bootstrap'

const Navbars = () => (
    <Navbar bg="info"  expand="lg" fixed={"top"}>
        <Container>
            <Link href="/">
            <Navbar.Brand><a>Portfolio</a></Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className={" justify-content-end"}>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link href={"/"}>
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href={"/about"}>
                            <a className="nav-link">Skills</a>
                        </Link>
                    </li>
                </ul>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default Navbars;
