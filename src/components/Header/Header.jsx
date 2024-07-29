import React from "react";
import "./Header.css";
const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <h2>Welcome to Foodie's Paradise!</h2>
                <p>
                    Find your next favorite dish from our diverse and delicious food
                    selection!
                </p>
                <button class="btn" role="button">
                    <a class="text">View Menu</a>
                    <a href="#explore-menu">Explore Delicious</a>
                </button>
            </div>
        </div>
    );
};

export default Header;
