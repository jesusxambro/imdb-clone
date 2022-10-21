import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {styled, alpha} from '@mui/material/styles';
import Button from '@mui/material/Button';
import axios from "axios";
import movie from "../Browsing/Movie";


const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));


function NavBar(props) {
    const [searchMovie, setSearchMovie] = useState("")
    const [searchedMovieList, setSearchedMovieList] = useState([])

    function handleHome(event) {
        props.setCurrentMovie({})
        setSearchMovie("")
        props.setMovieList(props.getAllMovies)
        props.setCurrentState("");
    }

    function handleSearch(event){
     setSearchMovie(event.target.value);
        //onChange={(event) => {setSearchItem(event.target.value)}}
    }

   async function handleSearchClick() {
        try {
            const res = await axios.get(`http://localhost:3001/search?query=${searchMovie}`)
            setSearchedMovieList(res.data.map((movie) => movie))
        } catch (error) {
            console.log(error);
        }
        props.searchResults(searchedMovieList)

    }


    function handleLogin() {
        props.setCurrentState('login');
    }

    return (

        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color={"error"}>
                <Toolbar>
                    <div id="navbar">
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                        >
                            GMDB &nbsp;&nbsp;&nbsp;
                        </Typography>
                        <Button variant="outlined" id="Home" onClick={handleHome}>Home</Button> &nbsp;&nbsp;
                        <Button variant="outlined" id="Login" onClick={handleLogin}>Login</Button>
                    </div>
                    <div id="search-box">
                        <Search>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                                value={searchMovie}
                                onChange={handleSearch}
                            />
                        </Search>
                        <Button onClick={handleSearchClick} variant="outlined">Search</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default NavBar