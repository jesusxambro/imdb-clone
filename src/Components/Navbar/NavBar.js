import React from 'react';
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

    function handleHome(event) {
        props.setCurrentMovie({})
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
                        <Button variant="outlined" id="Login">Login</Button>
                    </div>
                    <div id="search-box">
                        <Search>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Search>
                        <Button variant="outlined">Search</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default NavBar