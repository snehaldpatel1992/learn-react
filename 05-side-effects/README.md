# Understanding Side Effects: Data Fetching and Search

## Concept

Side effects in React handle operations outside the component's rendering cycle - like API calls, DOM manipulation, and subscriptions. The useEffect hook is central to handling these operations in modern React applications.

## Flow for Data Fetching

1. **Why We Need useEffect for Data Fetching**
   - React components render before data is available
   - We need to fetch data after initial render
   - Attempting to fetch in the main function body causes infinite loops

2. **Basic Data Fetching Pattern**
   - Setting up loading and error states
   - Using useEffect with an empty dependency array for one-time fetching
   - Implementing try/catch for error handling

```jsx
// Essential pattern for data fetching
React.useEffect(() => {
  let isMounted = true;
  
  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (isMounted) {
        setData(data);
        setLoading(false);
      }
    } catch (error) {
      if (isMounted) {
        setError(error.message);
        setLoading(false);
      }
    }
  }
  
  fetchData();
  
  return () => { isMounted = false; };
}, []);
```

## useEffect Lifecycle Scenarios

### 1. On Mount (Run Once)

When you want to run an effect only once when the component mounts:

```jsx
React.useEffect(() => {
  console.log('Component has mounted');
  // Initialize data, set up subscriptions, etc.
  
  // Optional cleanup function (runs on unmount)
  return () => {
    console.log('Component will unmount');
    // Clean up subscriptions, event listeners, etc.
  };
}, []); // Empty dependency array = run once on mount
```

### 2. On Unmount (Cleanup)

The cleanup function runs when the component unmounts or before the effect runs again:

```jsx
React.useEffect(() => {
  // Set up something that needs cleanup
  const subscription = someExternalAPI.subscribe();
  
  // Cleanup function
  return () => {
    subscription.unsubscribe();
    console.log('Cleaned up subscription');
  };
}, [someValue]); // Will clean up when someValue changes or component unmounts
```

### 3. On Update (React to Changes)

When you want an effect to run whenever specific values change:

```jsx
React.useEffect(() => {
  console.log('Either search term or products have changed!');
  const filteredResults = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredProducts(filteredResults);
  
  // No cleanup needed in this case
}, [searchTerm, products]); // Runs whenever searchTerm or products change
```

## Implementation Steps

### Stage 1: API Data Fetching
1. Create a ProductList component that fetches data from the API when mounted
2. Implement loading and error states with proper cleanup function
3. Display products with their images, titles, and prices

### Stage 2: Search Functionality with Dependencies
1. Create a SearchBar component with controlled input
2. Implement a useEffect that filters products based on the search term
3. Ensure proper dependency array configuration (the effect should run when either products or search term changes)

### Stage 3: Cart Management with Multiple Effects
1. Add an "Add to Cart" button for each product
2. Create a custom hook useCart() to manage cart state and operations
3. Implement a useEffect to calculate totals whenever cart items change
4. Create a ShoppingCart component that displays items and total

### Stage 4: Local Storage Persistence
1. Add a useEffect to save cart items to localStorage when they change
2. Initialize cart state from localStorage on component mount
