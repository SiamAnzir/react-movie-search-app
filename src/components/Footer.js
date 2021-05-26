import React from "react";
import {Container} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSourcetree} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return(
        <div className="footer">
            <hr/>
            <Container className="text-center">
                <div>
                    <p className="text-muted">Copyright &copy; React Website 2021</p>
                    <p><FontAwesomeIcon icon={faSourcetree}/> Results are showing via <a href="http://www.omdbapi.com/"> OMDB API </a> <FontAwesomeIcon icon={faSourcetree}/> </p>
                </div>
            </Container>
        </div>
    )
}

export default Footer;
