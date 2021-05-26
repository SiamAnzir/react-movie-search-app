import React, {useState,useEffect,useContext} from "react";
import './App.css';
import Header from "./components/Header";
import Movies from "./components/Movies";
import Search from "./components/Search";
import Footer from "./components/Footer";
import {ThemeContext} from "./context/ThemeContext";
import {Container,Spinner} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const App = () => {

    const MOVIE_API_URL = "http://www.omdbapi.com/?s=man&apikey=346a3183";

    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading,setLoading] = useState(true);

    const theme = useContext(ThemeContext);
    const [themeState, setThemeState] = useState(theme.light);

    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                setMovies(jsonResponse.Search);
                setLoading(false);
                console.log(jsonResponse);
            });
    }, []);

    const search = (searchValue) => {

        setErrorMessage(null);
        setLoading(true);

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=346a3183`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setMovies(jsonResponse.Search);
                    setLoading(false);
                } else {
                    setErrorMessage(jsonResponse.Error);
                    setLoading(false);
                }
            });
    };
    return(
        <section>
            <Header theme={theme} themeState={themeState} setThemeState={setThemeState}/>
            <Search search={search} themeState={themeState}/>
            {
                loading && !errorMessage ? (
                    <Container className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </Container>
                    ):
                errorMessage ? (
                    <Container className="text-center">
                        <h3>{errorMessage}</h3>
                        <p> <FontAwesomeIcon icon={faSearch}/> Do Search Again </p>
                        <p> Or </p>
                        <p><a href="/"> Go Back </a></p>
                    </Container>
                ) : (
                    <Movies movies={movies} themeState={themeState}/>
                )
            }
            <Footer themeState={themeState}/>
        </section>
    )
}

export default App;
