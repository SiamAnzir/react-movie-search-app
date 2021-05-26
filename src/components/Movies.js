import React from "react";
import {Card, Container,Row,Col} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFilm} from "@fortawesome/free-solid-svg-icons";

const Movies = (props) => {
    const allMovies = props.movies.map(movie => (
        <Col>
            <Card key={movie.imdbID} border="success" style={{
                width: '15rem',
                backgroundColor: props.themeState.background,
                color: props.themeState.foreground
            }}>
                <Card.Img variant="top" src={movie.Poster} height={340} />
                <Card.Body className="text-center">
                    <Card.Text>{movie.Title}</Card.Text>
                    <Card.Text>
                        {movie.Year}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
        </Col>
    ))
    return(
        <section  style={{
            backgroundColor: props.themeState.background,
            color: props.themeState.foreground
        }}>
            <br/>
            <Row className="justify-content-center">
                <h2><FontAwesomeIcon icon={faFilm}/> Movies <FontAwesomeIcon icon={faFilm}/></h2>
            </Row>
            <br/>
            <Container className="col-lg-8 col-md-10 mx-auto">
                <div>
                    <Row>
                        {allMovies}
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Movies;