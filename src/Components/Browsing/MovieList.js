import React from 'react';
import Movie from './Movie.js';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function MovieList(props){

    return(
        <div>
            {props.movieList ?
                        // <Movie key={index} movie={movie}/>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                {props.movieList.map((movie,index) => (
                                    <Grid item xs={2} sm={4} md={4} key={index}>
                                        <Movie key={index} movie={movie} setCurrentMovie={props.setCurrentMovie}/>
                                        {/*<Item>xs=2</Item>*/}
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                :
                <></>
            }


        </div>
    )
}





export default MovieList