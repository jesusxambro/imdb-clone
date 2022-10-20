import React from 'react';

function Movie(props){

    function handleClick(event){
    props.setCurrentMovie(props.movie);
    props.setCurrentState('detail')
    }
    return(
        <div onClick={handleClick} id={"moviePoster"}>
            <img alt="Movie poster"  src={props.movie.poster}/>
        </div>
    )


}

export default Movie;