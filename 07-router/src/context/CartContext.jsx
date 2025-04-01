import React, {createContext, useEffect} from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

    // whatever values declared here will be accessible by children const somedata= '123'

    const [cartItems, setCartItems] = React.useState(() => {
        const cart = localStorage.getItem('cart')
        return cart ? JSON.parse(cart) : []
    });

    const onAddToCart = (product) => {
        const newStateUpdatingFn = (currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.id === product.id,
            );
            if (existingItem) {
                return currentItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            } else {
                return [...currentItems, { ...product, quantity: 1 }];
            }
        }
        setCartItems(newStateUpdatingFn);
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems) )
    }, [cartItems])

    const onUpdateQuantity = (id, type) => {
        setCartItems((currentItems) => {
            return currentItems
                .map((item) => {
                    if (item.id !== id) return item;
                    const newQty =
                        type === "inc" ? item.quantity + 1 : item.quantity - 1;
                    return newQty > 0 ? { ...item, quantity: newQty } : null;
                })
                .filter((item) => item !== null);
        });
    };

    const contextValue = { cartItems, onAddToCart, onUpdateQuantity };

    return <CartContext.Provider value={contextValue} >{ children }</CartContext.Provider>
}

