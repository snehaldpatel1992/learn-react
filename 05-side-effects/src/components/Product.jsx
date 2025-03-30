import React from "react";

export function Product({ product, onAddToCart }) {

    return (
        <div className="product">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    );
}
