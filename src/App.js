import React, {useState,useEffect} from "react";
import './App.css';
import Header from "./components/Header";
import Movies from "./components/Movies";
import Search from "./components/Search";

const App = () => {

    const MOVIE_API_URL = "http://www.omdbapi.com/?s=man&apikey=346a3183";

    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                setMovies(jsonResponse.Search);
                console.log(jsonResponse);
            });
    }, []);

    const search = (searchValue) => {
        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=346a3183`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setMovies(jsonResponse.Search);
                } else {
                    setErrorMessage(jsonResponse.Error);
                }
            });
    };
    return(
        <section>
            <Header/>
            <Search search={search}/>
            <Movies movies={movies}/>
        </section>
    )
}

export default App;
