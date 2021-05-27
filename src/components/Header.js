import React from "react";
import logo from "../logo.svg"
import {Container,Navbar, OverlayTrigger, Tooltip} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMoon, faSearch, faVideo} from "@fortawesome/free-solid-svg-icons";

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
                <Navbar.Brand href="/react-movie-search-app/">
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
                    (props.themeState === props.theme.dark) ? (
                        <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={'tooltip-bottom'}> Turn Dark Mode Off </Tooltip>}>
                            <span onClick={lightMode} style={{cursor:"pointer"}}>
                                <FontAwesomeIcon icon={faMoon} color="white"/>
                            </span>
                        </OverlayTrigger>
                    ):(
                        <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={'tooltip-bottom'}> Turn Dark Mode On </Tooltip>}>
                            <span role="img" aria-label="sun" onClick={darkMode} style={{cursor:"pointer"}}>
                                🌞
                            </span>
                        </OverlayTrigger>
                    )
                }

            </div>
        </Navbar>
    );
};

export default Header;