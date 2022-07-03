import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
// import {  NavDropdown  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MainNavbar = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
				<Container>
					
						<Link className="navbar-brand" style={{ textDecoration: 'none', color: 'white' }} to="/archives">
							Dim Archives
						</Link>
					
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Link className="nav-link" to="/">
								Home
							</Link>
							<Link className="nav-link" to="/about">
								About
							</Link>
							{/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown> */}
						</Nav>
						<Nav>
							<Link className="nav-link " to="/follow" target="_blank" rel="noreferrer">
								Follow us!
							</Link>
							<Link className="nav-link " to="/support" target="_blank" rel="noreferrer">
								Support us!
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default MainNavbar;
