import React from "react";

export function CartItem({ item, onUpdateQuantity }) {

    return (
        <div className="cart-item">
            <span>
              {item.title} - ${item.price} x {item.quantity} = $
                {item.price * item.quantity}
            </span>
            <button onClick={() => onUpdateQuantity(item.id, "inc")}>+</button>
            <button onClick={() => onUpdateQuantity(item.id, "dec")}>-</button>
        </div>
    );
}
