import React, { useEffect, useContext , useReducer } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
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

    const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=346a3183";

    const reducer = (state,action) => {

        switch (action.type){
            case "GET_MOVIES_REQUEST":
                return{
                    ...state,
                    loading:true,
                    errorMessage:null
                };

            case "GET_MOVIES_SUCCESS":
                return {
                    ...state,
                    loading:false,
                    movies:action.payload
                };

            case "GET_MOVIES_FAILURE":
                return {
                    ...state,
                    loading:false,
                    errorMessage:action.error
                };

            default:
                return state;
        }
    };

    const initialState = {
        loading:true,
        movies:[],
        errorMessage:null
    };

    const [state,dispatch] = useReducer(reducer, initialState);
    const theme = useContext(ThemeContext);
    const currentTheme = theme.dark;
    const [themeState, setThemeState] = useLocalStorage('theme', currentTheme);
    const { loading , movies, errorMessage} = state;

    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {

                dispatch({
                    type: "GET_MOVIES_SUCCESS",
                    payload: jsonResponse.Search
                });
            });
    }, []);

    const search = (searchValue) => {
        dispatch({
            type:"GET_MOVIES_REQUEST"
        });

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=346a3183`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    dispatch({
                        type: "GET_MOVIES_SUCCESS",
                        payload: jsonResponse.Search
                    });
                } else {
                    dispatch({
                        type: "GET_MOVIES_FAILURE",
                        error: jsonResponse.Error
                    });
                }
            });
    };

    return(
        <section style={{
            backgroundColor: themeState.background,
            color: themeState.foreground
        }}>
            <Header theme={theme} themeState={themeState} setThemeState={setThemeState}/>
            <section className="mainContent">
                <Search search={search}/>
                <br/>
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
            </section>
            <Footer/>
        </section>
    )
}

export default App;
