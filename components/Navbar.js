import '../styles/Home.module.css'
import Link from "next/link";
import {Navbar, Nav, Container} from 'react-bootstrap'

const Navbars = () => (
    <Navbar bg="info" expand="lg" className={"bg-info"}>
        <Container>
            <Navbar.Brand href="/">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <ul className="navbar-nav mr-auto">
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
