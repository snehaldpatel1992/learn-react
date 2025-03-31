import React from "react";
import { useDispatch } from "react-redux";
import { onUpdateQuantity } from "../store/slices/cartSlice.js";

export function CartItem({ item }) {

    // const context = useCart()
    // const onUpdateQuantity = context.onUpdateQuantity

    const dispatch = useDispatch()

    return (
        <div className="cart-item">
            <span>
              {item.title} - ${item.price} x {item.quantity} = $
                {item.price * item.quantity}
            </span>
            <button onClick={() => dispatch(onUpdateQuantity({ id: item.id, type: "inc" }))}>+</button>
            <button onClick={() => dispatch(onUpdateQuantity({ id:  item.id, type: "dec" }))}>-</button>
        </div>
    );
}
