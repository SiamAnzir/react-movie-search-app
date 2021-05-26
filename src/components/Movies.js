import React from "react";
import {Card, Container,Row,Col} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFilm} from "@fortawesome/free-solid-svg-icons";

const Movies = (props) => {
    const allMovies = props.movies.map(movie => (
        <Col>
            <Card key={movie.imdbID} style={{ width: '15rem' }}>
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
        <section>
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