import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import axios from "axios";


function DetailMovie({movie, email}) {
    const [movieComment, setMovieComment] = useState("")
    const [reviewTitle, setReviewTitle] = useState("")
    const [comments, setComments] = useState([])

   async function getReviews(){
        try{
            const res = axios.get(`http://localhost:3001/reviews/${movie.movieId}`)
            console.log(res);
            // setComments(res.data.map((comment)=>comment))

        }catch (e) {
            console.log(e)
        }

    };
    async function postReview(){
        try{
            const res = axios.post(`http://localhost:3001/reviews`, {
                email: email,
                movieId: movie.movieId,
                reviewTitle: reviewTitle,
                reviewText: movieComment

            }).then(function (res){

            }).catch(function (error){
                console.log(error);
            });
        } catch(e){
        }

    }

    function handleSubmit() {
        postReview().then(r => console.log(r))
    }
    getReviews();

    function showReviews() {
        return(
            <div>
                Reviews go here
            </div>
        )
    }

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
                    placeholder="Comment Title"
                    value={reviewTitle}
                    onChange={(e) => {
                        setReviewTitle(e.target.value)
                    }}
                    variant={"standard"}
                ></TextField>
                <TextField
                    placeholder="Leave a comment"
                    value={movieComment}
                    onChange={(e) => {
                        setMovieComment(e.target.value)
                    }}
                    variant={"standard"}
                ></TextField>
                <Button variant="outlined" onClick={handleSubmit} id="commentSubmit">Submit</Button></div>
                {showReviews()}
        </div>
    )
}

export default DetailMovie;