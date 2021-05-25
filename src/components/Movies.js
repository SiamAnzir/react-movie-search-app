import React from "react";
import {Card, Container,Row,Col} from "react-bootstrap";

const Movies = (props) => {
    const allMovies = props.movies.map(movie => (
        <Col>
            <Card key={movie.imdbID} style={{ width: '16rem' }}>
                <Card.Img variant="top" src={movie.Poster} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
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
            <Container className="col-lg-8 col-md-10 mx-auto">
                <br/>
                <Row className="justify-content-center">
                    <h2>Movies</h2>
                </Row>
                <Row>
                    <div>
                        {allMovies}
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Movies;