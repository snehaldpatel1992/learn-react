import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

import { useDispatch } from 'react-redux'
import {onAddToCart} from "../store/slices/cartSlice.js";

// useSelector, getting reactive state value from store,
// useDispatch, to dispatch some action , which will be used by reducer fn declared in createSlice
// to UPDATE THE STATE

export function Product({ product }) {

    // const context = useContext(CartContext)
    // const onAddToCart = context.onAddToCart

    const dispatch = useDispatch()
    // onAddToCart(product) //  { type : 'onAddToCart', payload: { product }}

    return (
        <div className="product">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => dispatch(onAddToCart(product))}>Add to Cart</button>
        </div>
    );
}
