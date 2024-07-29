import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets.js';
import Menu from '../Menu/Menu.jsx';
import { NavLink } from 'react-router-dom';

const menuItems = [
    { item: 'Home', path: '/' },
    { item: 'Menu', id: '#explore-menu' },
    { item: 'Mobile-App', id: '#mobile-app' },
    { item: 'Contact', id: '#contact' }
];

const Navbar = ({ setShowLogIn }) => {
    const [showSearchBox, setShowSearchBox] = useState(false); // State to toggle search box

    const toggleSearchBox = () => {
        setShowSearchBox((prevShowSearchBox) => !prevShowSearchBox);
    };

    return (
        <div className='navbar'>
            <NavLink to='/'><img src={assets.logo} alt="" className='logo' /></NavLink>
            <Menu menuItems={menuItems} />

            <div className="nav-search-container">
                {showSearchBox && (
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        autoFocus
                    />
                )}
                <img
                    src={assets.search_icon}
                    alt=""
                    className='search-icon'
                    onClick={toggleSearchBox}
                />
                <div className="cart-box">
                    <NavLink to='/cart'><img src={assets.basket_icon} alt="" className='cart-basket' /></NavLink>
                    <span className='dot'></span>
                </div>
                <button onClick={() => setShowLogIn(true)} className='nav-btn'>Sign in</button>
            </div>
        </div>
    );
}

export default Navbar;
