import React, {useEffect, useState} from 'react'
import './App.css'
// import { CartProvider } from "./context/CartContext.jsx";
import { Provider as ReduxStoreProvider } from 'react-redux'
import { store } from "./store/store.js";
import { Home } from "./components/Home.jsx";
import { Cart } from "./components/Cart.jsx"

function App() {

    const [ currentPath, setCurrentPath ] = useState(window.location.pathname)

    const onClickHandler = (e, path) => {
        e.preventDefault()
        history.pushState({}, '', path)
        setCurrentPath(path)
    }

    useEffect(() => {
        const listener = (e) => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', listener)
        return () => {
            window.removeEventListener('popstate', listener)
        }
    }, [])

    return (
        <div>
            <a href="/" onClick={(e) => { onClickHandler(e, '/') } }>Home</a> |
            <a href="/cart" onClick={(e) => { onClickHandler(e, '/cart') } }>Cart</a>

            <ReduxStoreProvider store={store} >
                { currentPath === '/' ? <Home /> : null }
                { currentPath === '/cart' ? <Cart /> : null }
            </ReduxStoreProvider>
        </div>

    );
}

export default App