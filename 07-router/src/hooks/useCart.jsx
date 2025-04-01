import  { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('Forgot to wrap react tree with Provider')
    }
    return context
}
