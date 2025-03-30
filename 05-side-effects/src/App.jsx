import React, {useEffect, useState} from 'react'
import './App.css'
import { ProductList } from "./components/ProductList.jsx";
import { Cart } from "./components/Cart.jsx"
import { useCart } from "./hooks/useCart.jsx"
import { useProducts } from "./hooks/useProducts.jsx";





function App() {
    const cart = useCart();
    const {
        products,
        isLoading,
        error
    } = useProducts()

    const [filteredProducts, setFilteredProducts] = useState([])
    const [search, setSearch] = useState('')
    const onChange =(event) => {
        setSearch(event.target.value)
    }

    useEffect(() => {
        const filtered = products.filter((product) => {
            const lowerCased = product.title.toLowerCase()
            return lowerCased.includes(search.toLowerCase())
        })
        setFilteredProducts(filtered)
    }, [search, products])

    if (isLoading) {
        return <h1>Loading</h1>
    }
    if (error) {
        return <h1>Something went wrong</h1>
    }

    return (
        <div>
            <input value={search} onChange={onChange} />
            <ProductList 
                products={filteredProducts} 
                onAddToCart={cart.onAddToCart} 
            />
            <Cart 
                cartItems={cart.cartItems} 
                onUpdateQuantity={cart.onUpdateQuantity} 
            />
        </div>
    );
}

export default App
