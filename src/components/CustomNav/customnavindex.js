import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const CustomNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <div className="custom-nav">
            <Navbar color="faded" warning expand="md">
                    <NavbarBrand href="/" className="mr-auto">
                        Welcome to the Home page
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} className="mr-2" />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/logout">
                                    Logout
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            <div className="welcome-page">
                <h1>My Midterm Project</h1>
                <p>Hello, I am...</p>
            </div>
        </>
        
    );
};

export default CustomNav;