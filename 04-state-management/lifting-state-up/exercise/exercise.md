# Exercise: Shopping Cart Component

In this exercise, you'll practice lifting state up by creating a simple shopping cart application.

## Requirements

1. Create a shopping application with the following components:
   - `ProductList` - Displays a list of products
   - `Product` - Individual product with "Add to Cart" button
   - `Cart` - Shows items in cart with quantities and total price
   - `App` - Parent component that manages the shared state

2. The application should:
   - Display at least 3 products with name, price, and add button
   - Allow users to add products to cart
   - Show cart total (sum of price × quantity)
   - Allow users to adjust quantities in the cart

## Starting Point

```jsx
// Example product data
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 15 },
  { id: 3, name: 'Product 3', price: 20 },
];

// Start by implementing these components:
function Product() {
  // Your code here
}

function ProductList() {
  // Your code here
}

function Cart() {
  // Your code here
}

function App() {
  // Your code here
}
```

## Implementation Steps

1. Create basic components without state first
2. Add state to the App component to track cart items
3. Pass product data and event handlers to ProductList/Product 
4. Pass cart data to the Cart component
5. Implement quantity adjustment in the cart

## Key Concepts to Apply

- State should be lifted to App component
- Child components should not manage cart state directly
- Use props to pass data down
- Use callback functions to send actions up
