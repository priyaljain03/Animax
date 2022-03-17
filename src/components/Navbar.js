import React from 'react';
import Logo from './Logo';
import '../css/Navbar.css';
import CasinoIcon from '@mui/icons-material/Casino';
import Casino from '@mui/icons-material/Casino';
import SearchIcon from '@mui/icons-material/Search';
function Navbar() {
    return (
        <div className="nav">
            <div className="logo-wrapper">
                <Logo />
            </div>
            <ul className="menu-list">
                <li><button className="premium-button">Try Premium</button></li>
                <li ><Casino style={{padding:'0px'}}/>Random</li>
                <li><SearchIcon /> Search</li>
                <li><button className="login-button">Login</button></li>
            </ul>
        </div>
    )
}

export default Navbar