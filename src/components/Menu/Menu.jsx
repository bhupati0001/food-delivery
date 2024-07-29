import React, { useState } from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';

const Menu = ({ menuItems }) => {
    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (item) => {
        setActiveItem(item);
    };

    return (
        <ul className="menu">
            {menuItems.map((menuItem, index) => (
                <li
                    key={index}
                    className={activeItem === menuItem.item ? 'active' : ''}
                    onClick={() => handleClick(menuItem.item)}
                >
                    {menuItem.path
                        ? <NavLink to={menuItem.path}>{menuItem.item}</NavLink>
                        : <a href={menuItem.id}>{menuItem.item}</a>
                    }
                </li>
            ))}
        </ul>
    );
};

export default Menu;
