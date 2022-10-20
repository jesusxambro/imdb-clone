import React from 'react';
import MovieList from './MovieList'

function Browsing(props) {



    if (Object.keys(props.movieList).length === 0){
        return(
            <>
        </>)
    }else{
        return(
            <div>
                Browsing
                <MovieList movieList={props.movieList} setCurrentMovie={props.setCurrentMovie}/>
            </div>
        )
    }




}

export default Browsing;
