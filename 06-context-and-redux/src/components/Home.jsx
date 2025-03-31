import { ProductList } from "./ProductList.jsx";
import React, {useEffect, useState} from "react";
import { useProducts } from "../hooks/useProducts.jsx";


export function Home () {
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
        <>
            <label>Search by: </label><input value={search} onChange={onChange} />
            <ProductList
                products={filteredProducts}
            />
        </>
    )
}