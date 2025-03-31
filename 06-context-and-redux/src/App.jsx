import React from 'react'
import './App.css'
// import { CartProvider } from "./context/CartContext.jsx";
import { Provider as ReduxStoreProvider } from 'react-redux'
import { store } from "./store/store.js";
import { Home } from "./components/Home.jsx";
import { Cart } from "./components/Cart.jsx"

function App() {
    return (
        <ReduxStoreProvider store={store} >
            <Home />
            <Cart />
        </ReduxStoreProvider>
    );
}

export default App
