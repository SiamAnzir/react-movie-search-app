import React from "react";
import logo from "../logo.svg"
import {Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-center">
            <Navbar.Brand>
                <img
                    alt="react-logo"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                React Movie Search App
            </Navbar.Brand>
        </Navbar>
    );
};

export default Header;