import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ item }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)

    return (
        <div className="food-item">
            <div className="foodItem-img-container">
                <img src={item.image} alt={item.name} />
                {!cartItems[item._id]
                    ? <div className="plus" onClick={() => addToCart(item._id)}>+</div>
                    : <div className="counter">
                        <span className="minus" onClick={() => removeFromCart(item._id)}>-</span>
                        <span className="value">{cartItems[item._id]}</span>
                        <span className="add" onClick={() => addToCart(item._id)}>+</span>
                    </div>}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{item.name}</p>
                    <img src={assets.rating_starts} alt="stars" />
                </div>
                <p className="food-item-desc">{item.description}</p>
                <p className="food-item-price">{item.price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
