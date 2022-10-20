import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/Navbar/NavBar";
import Browsing from "./Components/Browsing/Browsing";
import axios from "axios";
import {useEffect, useState} from "react";
import DetailMovie from "./Components/Browsing/DetailMovie";
import Login from "./Components/Login/Login";

// {/* TODO: Components -> NavBar,
//     Content ->
//       Browsing,
//       Specific Movie
//       SearchResults

// Make Search functional
// Build out login page
// Make comment functional
// make login button work


//       Login, */}
function App() {
    const [movieList, setMovieList] = useState([]);
    const [currentMovie, setCurrentMovie] = useState({});
    const [searchMovie, setSearchMovie] = useState({});
    const [currentState, setCurrentState] = useState("");
    const [user, setUser] = useState({});


    async function getAllMovies() {
        try {
            const res = await axios.get("http://localhost:3001/movies")
            setMovieList(res.data.map((movie) => movie))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllMovies();
    }, [])

 function   searchResults(movieList){
        setMovieList(movieList);
        setCurrentState("search")
 }
    function whatToRender() {
        switch (currentState) {
            case 'detail':
                return (
                    <div>
                        <DetailMovie movie={currentMovie}
                        />
                    </div>
                );
            case 'login':
                return (
                    <Login user={setUser} />
                )

            case 'search':
                return (
                    <div>
                        <Browsing currentMovie={currentMovie}
                                  movieList={movieList}
                                  setCurrentMovie={setCurrentMovie}
                                  setCurrentState={setCurrentState}
                        />
                    </div>
                );

            default:
                return (
                    <div>
                        <Browsing currentMovie={currentMovie}
                                  movieList={movieList}
                                  setCurrentMovie={setCurrentMovie}
                                  setCurrentState={setCurrentState}
                        />
                    </div>
                );
        }

    }


    return (
        <div className="App">
            <NavBar searchResults={searchResults}
                    setCurrentMovie={setCurrentMovie}
                    setCurrentState={setCurrentState}
                    getAllMovies={getAllMovies}
                    setMovieList={setMovieList}
            />
            {whatToRender()}
        </div>
    );
}

export default App;
