import React, { useState } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ setCategory }) => {
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    function handleClick(menu_item) {
        setActiveMenuItem(menu_item.menu_name);
        setCategory(menu_item.menu_name);
    }

    return (
        <div className="explore-menu" id="explore-menu">
            <h1>Explore our Menu</h1>
            <p className="explore-menu-para">
                Dive into our delicious selection, ranging from tasty starters to
                mouth-watering mains and delightful desserts. Our menu is crafted to
                suit all tastes, with fresh ingredients and chef-curated specialties.
                Find your next favorite dish and enjoy a culinary adventure with every
                order!
            </p>
            <div className="explore-menu-list">
                {menu_list.map((menu_item) => {
                    return (
                        <div
                            onClick={() => handleClick(menu_item)}
                            className="explore-menu-item"
                            key={menu_item.menu_name}
                        >
                            <img
                                className={
                                    activeMenuItem === menu_item.menu_name
                                        ? "active-menu-item"
                                        : ""
                                }
                                src={menu_item.menu_image}
                                alt={menu_item.menu_name}
                            />
                            <p>{menu_item.menu_name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ExploreMenu;
