import React from "react";
import ItemBasketCard from "../../components/ItemBasketCard/ItemBasketCard";

const Basket = () => {
    return (
        <div>
            <h1>Your Current Basket</h1> 
            <ItemBasketCard /> 
        </div>
    );
};

export default Basket;