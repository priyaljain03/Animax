import * as React from 'react';
import {Link} from "react-router-dom"
import Logo from './Logo';
import Casino from '@mui/icons-material/Casino';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import '../css/Navbar.css'

//Created Dark Theme for NavBar
const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    },
});


// Responsive Navbar JSX starts here
const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* Mobile Menu View */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <Logo />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            {/* Mobile menu Icon */}
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            {/* MobileMenu starts Here */}
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem key="menuLogin" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"><FaceOutlinedIcon /> LOGIN</Typography>
                                </MenuItem>
                                <MenuItem key="menuRandom" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"><Casino className="icon" /> RANDOM</Typography>
                                </MenuItem>
                                <MenuItem key="menuSearch" onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"><SearchIcon className="icon" /> SEARCH</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>

                        {/* Bigger screens view  */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <Logo />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <MenuItem
                                key={'twitter'}
                                onClick={()=>window.open('https://www.twitter.com/')}
                                sx={{
                                    my: 2, color: 'white',
                                    display: 'block',
                                    backgroundColor:'rgb(53, 95, 209)',
                                    borderRadius:'10px',
                                    '&:hover': {
                                        cursor:"pointer"
                                    }
                                }}
                            >
                                <TwitterIcon />
                            </MenuItem>
                                <MenuItem
                                key={'facebook'}
                                onClick={()=>window.open('https://www.facebook.com/')}
                                sx={{
                                    my: 2, color: 'white',
                                    display: 'block',
                                    backgroundColor:'rgb(30, 30, 161)',
                                    borderRadius:'10px',
                                    '&:hover': {
                                        cursor:"pointer"
                                    }
                                }}
                            >
                                <FacebookIcon />
                            </MenuItem>
                                <MenuItem
                                key={'reddit'}
                                onClick={()=>window.open('https://www.reddit.com/')}
                                sx={{
                                    my: 2, color: 'white',
                                    display: 'block',
                                    backgroundColor:'red',
                                    borderRadius:'10px',
                                    '&:hover': {
                                        cursor:"pointer"
                                    }
                                }}
                            >
                                <RedditIcon />
                            </MenuItem>
                           
                        </Box>

                        {/* Menu Items starts here */}
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                           
                            <MenuItem
                                key={'search'}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2, color: 'white', display: 'block',
                                    '&:hover': {
                                        color: 'orangered',
                                        transition: 'color 300ms linear',
                                        background: 'none'
                                    }
                                }}
                            >
                                <SearchIcon className="icon" />Search
                            </MenuItem>
  <MenuItem
                                key={'random'}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2, color: 'white',
                                    display: 'block',
                                    '&:hover': {
                                        color: 'orangered',
                                        transition: 'color 300ms linear',
                                        background: 'none'
                                    }
                                }}
                            >
                                <Casino className="icon" />Random
                            </MenuItem>
                            <Button
                                key='login'
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2, color: 'white', display: 'block',
                                    backgroundColor: 'transparent',
                                    border: '1px solid white',
                                    marginRight:'10px',
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        color: 'black'
                                    },
                                }}
                            >
                                LogIn
                            </Button>
                            <Button sx={{
                                my: 2, color: 'black', fontWeight: '1000', fontSize: '10px',
                                display: 'block', backgroundColor: 'orange',
                                '&:hover': {
                                    backgroundColor: 'rgb(233, 175, 68)',
                                },
                            }}>Try Premium</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};

export default ResponsiveAppBar