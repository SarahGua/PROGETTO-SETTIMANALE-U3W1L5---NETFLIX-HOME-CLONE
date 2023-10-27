import { Component } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Search, BellFill, PersonCircle} from "react-bootstrap-icons"
import logo from "../logo.png "

class NavBar extends Component {
    render(){
        return (
        //     <Navbar expand="lg" className="bg-dark">
        //         <Container className="container-fluid">
        //             <Navbar.Brand href="#home"></Navbar.Brand>
        //             <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        //             <Navbar.Collapse id="basic-navbar-nav" className="fw-bold text-white" >
        //             <Nav className="d-flex w-100 justify-content-start">
        //                 <Nav.Link href="#home" className="fw-bold text-white">Home</Nav.Link>
        //                 <Nav.Link href="#link" className="fw-bold text-white">TV Shows</Nav.Link>
        //                 <Nav.Link href="#link" className="fw-bold text-white">Movies</Nav.Link>
        //                 <Nav.Link href="#link" className="fw-bold text-white">Recently Added</Nav.Link>
        //                 <Nav.Link href="#link" className="fw-bold text-white">My List</Nav.Link>
        //             </Nav>
        //             <Nav className="d-flex w-100 justify-content-end">
        //                 <Nav.Link href="#home" className="fw-bold text-white"><Search/></Nav.Link>
        //                 <Nav.Link href="#link" className="fw-bold text-white">KIDS</Nav.Link>
        //                 <Nav.Link href="#link" className="fw-bold text-white"><BellFill/></Nav.Link>
        //                 <Nav.Link href="#link" className="fw-bold text-white"><PersonCircle/></Nav.Link>
        //             </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        // </Navbar>
        <nav
        className="navbar navbar-expand-lg bg-dark"
        data-bs-theme="dark"
        >
            <div className="container-fluid">
            <a className="navbar-brand" href="#home"
                ><img src={logo} alt="logo"/></a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active fw-bold" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-bold" href="#">TV Shows</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-bold" href="#">Movies</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-bold" href="#">Recently Added</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-bold" href="#">My List</a>
                </li>
                </ul>
                <div className="d-flex align-items-center">
                <i className="bi bi-search icons"></i>
                <div id="kids" className="fw-bold">KIDS</div>
                <i className="bi bi-bell icons"></i>
                <i className="bi bi-person-circle icons"></i>
                </div>
            </div>
            </div>
        </nav>
        )
    }
}

export default NavBar