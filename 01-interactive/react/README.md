# React Curly Brace Syntax Examples

Here are code snippets to demonstrate different aspects of React's curly brace syntax for displaying dynamic data:

## 1. Basic Variable Display

```jsx
// Display a simple variable
const name = "React";
return <p>Hello, {name}!</p>;
```

## 2. Mathematical Expressions

```jsx
// Display result of a calculation
const price = 19.99;
const quantity = 3;
return <p>Total: ${(price * quantity).toFixed(2)}</p>;
```

## 3. Conditional Rendering with Ternary Operators

```jsx
// Change text based on a condition
const count = 5;
return <p>You have {count} {count === 1 ? 'message' : 'messages'}</p>;
```

## 4. Function Calls

```jsx
// Display result of a function call
function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
return <p>Today is {formatDate(Date.now())}</p>;
```

## 5. Using Objects and Accessing Properties

```jsx
// Access object properties
const user = {
  firstName: "John",
  lastName: "Doe"
};
return <p>Welcome back, {user.firstName} {user.lastName}</p>;
```

## 6. Array Rendering in React

### Simple Array Display

```jsx
// Simple method to display array items as text
const fruits = ["Apple", "Banana", "Cherry"];
return (
  <div>
    <p>Available fruits: {fruits.join(", ")}</p>
  </div>
);
```

### Rendering Array Items as Components

```jsx
// Using map() to transform array data into React elements
const fruits = ["Apple", "Banana", "Cherry"];
return (
  <div>
    <h3>Fruit List:</h3>
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  </div>
);
```

### Rendering Components from Array of Objects

```jsx
// Using map() with an array of objects
const people = [
  { id: 1, name: "Alice", role: "Developer" },
  { id: 2, name: "Bob", role: "Designer" },
  { id: 3, name: "Charlie", role: "Manager" }
];

return (
  <div>
    <h3>Team Members:</h3>
    <div className="card-container">
      {people.map(person => (
        <div key={person.id} className="card">
          <h4>{person.name}</h4>
          <p>{person.role}</p>
        </div>
      ))}
    </div>
  </div>
);
```

> **Note:** The `key` prop is important when rendering lists in React. It helps React identify which items have changed, been added, or been removed, making the rendering process more efficient.

## 7. Inline Conditional Rendering with &&

```jsx
// Only show element if condition is true
const isLoggedIn = true;
return (
  <div>
    {isLoggedIn && <p>Welcome to your dashboard</p>}
  </div>
);
```

## 8. Setting HTML Attributes

```jsx
// Using curly braces to set HTML attribute values
const userName = 'Max';
const inputId = 'username-field';
const isDisabled = false;

return (
  <>
    <label htmlFor={inputId}>Username:</label>
    <input 
      type="text" 
      id={inputId} 
      value={userName} 
      disabled={isDisabled} 
    />
  </>
);
```

## 9. Combining Multiple Expressions

```jsx
// Combining different types of expressions
const user = { name: "Alice", premium: true };
const discount = 15;
return (
  <p>
    Hello {user.name}! 
    {user.premium ? ` You get a ${discount}% discount today!` : ""}
  </p>
);
```
