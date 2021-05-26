import React from "react";
import logo from "../logo.svg"
import {Container, Nav, Navbar, OverlayTrigger, Tooltip} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch, faVideo} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {

    const darkMode = () => {
        props.setThemeState(props.theme.dark);
    };
    const lightMode = () => {
        props.setThemeState(props.theme.light);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container  className="justify-content-center">
                <Navbar.Brand href="/">
                    <img
                        alt="react-logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    React Movie Search App <FontAwesomeIcon icon={faVideo}/> <FontAwesomeIcon icon={faSearch}/>
                </Navbar.Brand>
            </Container>
            <div>
                {
                    (props.themeState === props.theme.light) ? (
                        <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={'tooltip-bottom'}> Turn Dark Mode On </Tooltip>}>
                            <span role="img" aria-label="sun" onClick={darkMode} style={{cursor:"pointer"}}>
                            🌞
                            </span>
                        </OverlayTrigger>
                    ):(
                        <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={'tooltip-bottom'}> Turn Light Mode On </Tooltip>}>
                            <span role="img" aria-label="moon" onClick={lightMode} style={{cursor:"pointer"}}>
                            🌚
                            </span>
                        </OverlayTrigger>
                    )
                }

            </div>
        </Navbar>
    );
};

export default Header;