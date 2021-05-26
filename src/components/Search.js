import React, {useState} from "react";
import {Form, FormControl, Button, Container, Row} from "react-bootstrap";

const Search = (props) => {

    const [searchValue,setSearchValue] =useState("");

    const handleSearchInputChanges = (event) => {
        setSearchValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.search(searchValue);
        setSearchValue("");
        console.log("clicked");
    }

    return(
        <Container>
            <br/>
            <Row className="justify-content-center">
                <Form inline>
                    <FormControl placeholder="Search Movie By Title"
                                 value={searchValue}
                                 onChange={handleSearchInputChanges}
                                 type="text"
                    />
                    <Button variant="success" type="submit" onClick={handleSubmit} style={{ marginLeft: '.5rem' }}>Search</Button>
                </Form>
            </Row>
        </Container>
    )
}

export default Search;