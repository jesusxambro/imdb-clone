import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/Navbar/NavBar";
import Browsing from "./Components/Browsing/Browsing";
import axios from "axios";
import {useEffect, useState} from "react";
import DetailMovie from "./Components/Browsing/DetailMovie";

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

    function whatToRender() {


        // if (currentMovie.title){
        //     return (
        //         <div>
        //             <DetailMovie movie={currentMovie}
        //         />
        //         </div>
        //     )
        // } else if (currentState) {
        //     return (
        //         <div>
        //
        //             <Browsing currentMovie={currentMovie}
        //                     movieList={movieList}
        //                     setCurrentMovie={setCurrentMovie}
        //         />
        //         </div>
        //
        //     )
        // }
    }


    return (
        <div className="App">
            <NavBar setCurrentMovie={setCurrentMovie} setCurrentState={setCurrentState}/>
            {whatToRender()}
        </div>
    );
}

export default App;
