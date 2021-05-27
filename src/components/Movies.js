import React from "react";
import {Card, Container,Row,Col,CardDeck} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFilm} from "@fortawesome/free-solid-svg-icons";
import defaultPoster from "../Picture-Unavailable.jpg"

const Movies = (props) => {
    const allMovies = props.movies.map(movie => (
        <>
            <Col>
                <Card key={movie.imdbID} border="success" style={{
                    height:'450px',
                    width: '15rem',
                    backgroundColor: props.themeState.background,
                    color: props.themeState.foreground
                }}>
                    <Card.Img variant="top" src={movie.Poster === "N/A" ? (defaultPoster) : (movie.Poster)} height={340} />
                    <Card.Body className="text-center">
                        <Card.Text>
                            <Row className="justify-content-center">
                                {movie.Title}
                            </Row>
                        </Card.Text>
                    </Card.Body>
                    <Row className="justify-content-center pb-3">
                        {movie.Year}
                    </Row>
                </Card>
                <br/>
            </Col>
        </>
    ))
    return(
        <section>
            <br/>
            <Row className="justify-content-center">
                <h2><FontAwesomeIcon icon={faFilm}/> Movies <FontAwesomeIcon icon={faFilm}/></h2>
            </Row>
            <br/>
            <Container className="col-lg-8 col-md-10 mx-auto">
                <div>
                    <CardDeck>
                        {allMovies}
                    </CardDeck>
                </div>
            </Container>
        </section>
    )
}
/**
 * <Card.Footer className="border-0">
 <Row className="justify-content-center">
 {movie.Year}
 </Row>
 </Card.Footer>**/

export default Movies;