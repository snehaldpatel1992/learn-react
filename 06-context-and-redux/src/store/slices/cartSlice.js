import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        onAddToCart: (currentState, action) => {
            // product is coming from action object, which component will dispatch
            const product = action.payload
            const existingItem = currentState.find(
                (item) => item.id === product.id,
            );
            if (existingItem) {
                return currentState.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            } else {
                return [...currentState, { ...product, quantity: 1 }];
            }
        },
        onUpdateQuantity: (currentState, action) => {
            // id will come from action object,
            // type will come from action object,
            const payload = action.payload
            const id = payload.id
            const type = payload.type
            return currentState
                .map((item) => {
                    if (item.id !== id) return item;
                    const newQty =
                        type === "inc" ? item.quantity + 1 : item.quantity - 1;
                    return newQty > 0 ? { ...item, quantity: newQty } : null;
                })
                .filter((item) => item !== null);
        }
    }
})

export const { onAddToCart, onUpdateQuantity } = cartSlice.actions
