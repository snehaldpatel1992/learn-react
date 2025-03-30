import React from "react";
import { CartItem } from "./CartItem.jsx"
import { useMemo } from "react";

export function Cart({ cartItems: items, onUpdateQuantity }) {

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
                            onUpdateQuantity={onUpdateQuantity}
                        />
                    ))}
                    <h3>Total: ${memoizedTotal}</h3>
                </div>
            )}
        </div>
    );
}
