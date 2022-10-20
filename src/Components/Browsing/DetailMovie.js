import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";


function DetailMovie({movie}) {
    const [movieComment, setMovieComment] = useState("")

    return (
        <div id={"detail-movie-page"}>
            <div id={"detail-movie-container"}>
                <br/>
                <br/>
                <img id={"moviePoster-single"} src={movie.poster}/>
                <div id={"movieContent"}>
                    <h3>{movie.title}</h3>
                    <h4>{movie.released}</h4>
                    <h5>{movie.genre} | {movie.actors}</h5>
                    <p>
                        {movie.plot}
                    </p>
                </div>

            </div>
            <div id={"comment"}>
                <TextField
                    placeholder="Leave a comment"
                    value={movieComment}
                    onChange={(e) => {
                        setMovieComment(e.target.value)
                    }}
                    variant={"standard"}
                ></TextField>
                <Button variant="outlined" id="commentSubmit">Submit</Button></div>
        </div>
    )
}

export default DetailMovie;