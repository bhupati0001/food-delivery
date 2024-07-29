import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext)
    return (
        <div className='food-display'>
            <h2>Top Dishes near You!!</h2>
            <div className="food-display-list">
                {
                    category === 'all'
                        ? food_list.map((item, index) => {
                            return <FoodItem key={index} item={item} />
                        })
                        : food_list.filter((item) => item.category === category).map((item, index) => {
                            return <FoodItem key={index} item={item} />
                        })
                }
            </div>

        </div>
    )
}

export default FoodDisplay