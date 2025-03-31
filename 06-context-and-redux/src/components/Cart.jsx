import React, {useContext} from "react";
import { CartItem } from "./CartItem.jsx"
import { useMemo } from "react";
import {CartContext} from "../context/CartContext.jsx";
import { useSelector } from "react-redux";


export function Cart() {

    // const context = useContext(CartContext)
    // const items = context.cartItems

    const items = useSelector((state) => {
        return state.cart
    })

    const memoizedTotal = useMemo(() => {
        return items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
        );
    }, [items])

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {items.length === 0 ? (
                <h1>Your cart is empty</h1>
            ) : (
                <div>
                    {items.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                        />
                    ))}
                    <h3>Total: ${memoizedTotal}</h3>
                </div>
            )}
        </div>
    );
}
