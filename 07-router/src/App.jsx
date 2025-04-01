import React from 'react'
import './App.css'
// import { CartProvider } from "./context/CartContext.jsx";
import { Provider as ReduxStoreProvider } from 'react-redux'
import { store } from "./store/store.js";
import { Home } from "./components/Home.jsx";
import { Cart } from "./components/Cart.jsx"
import { BrowserRouter, NavLink, Route, Routes } from "react-router";

function App() {
    return (
        <BrowserRouter>
            <NavLink to="/" >Home</NavLink> |
            <NavLink to="/cart">Cart</NavLink>
            <ReduxStoreProvider store={store} >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </ReduxStoreProvider>
        </BrowserRouter>
    );
}

export default App
