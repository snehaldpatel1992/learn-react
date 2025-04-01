# Understanding Client-Side Routing

## Concept

Routing in web applications allows users to navigate between different views without full page reloads. For Single Page Applications (SPAs), this is handled entirely on the client side, providing a smoother user experience.

## Vanilla JS Routing Implementation

Before learning React Router, it's important to understand the fundamentals of client-side routing:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>My SPA</title>
    <style>
        nav a {
            margin-right: 1rem;
            cursor: pointer;
            text-decoration: underline;
        }
    </style>
</head>
<body>
<nav>
    <a href="/" id="link-home">Home</a>
    <a href="/about" id="link-about">About</a>
    <a href="/contact" id="link-contact">Contact</a>
</nav>

<div id="content"></div>

<script>
    const contentDiv = document.getElementById('content');
    
    function updateContent(path) {
        let pageContent = '';

        switch (path) {
            case '/about':
                pageContent = '<h1>About Us</h1><p>This is the about page.</p>';
                document.title = 'About Us | My SPA';
                break;
            case '/contact':
                pageContent = '<h1>Contact</h1><p>Get in touch!</p>';
                document.title = 'Contact | My SPA';
                break;
            case '/':
            default:
                pageContent = '<h1>Home</h1><p>Welcome to the single page app!</p>';
                document.title = 'Home | My SPA';
                break;
        }

        contentDiv.innerHTML = pageContent;
    }

    function navigate(path) {
        // Update the content
        updateContent(path);
        
        // Update the URL without page reload
        history.pushState({ page: path }, '', path);
    }

    // Add click handlers for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigate(link.getAttribute('href'));
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (event) => {
        const path = event.state ? event.state.page : window.location.pathname;
        updateContent(path);
    });

    // Initial page load
    updateContent(window.location.pathname);
</script>
</body>
</html>
```

### Key Concepts in Vanilla JS Routing

1. **Preventing Default Behavior**
  - `e.preventDefault()` stops browser from loading a new page

2. **History API**
  - `history.pushState()` updates URL without page reload
  - First parameter: state object stored with the history entry
  - Second parameter: title (usually empty string, ignored by most browsers)
  - Third parameter: the new URL

3. **Handling Browser Navigation**
  - `popstate` event fires when user clicks back/forward
  - We need to manually update content based on URL

4. **Initial Load**
  - Reading `window.location.pathname` to render the correct content


## Vanilla React Routing Implementation


```jsx
// App.jsx
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
```

## React Router Implementation

Now let's implement routing in React using React Router:

### Step 1: Install React Router

```bash
npm install react-router-dom
```

### Step 2: Basic Router Setup

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Step 3: Create Navigation Component

```jsx
// components/Navigation.jsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navigation;
```

### Step 4: Create Page Components

```jsx
// pages/Home.jsx
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the single page app!</p>
    </div>
  );
}

export default Home;
```

```jsx
// pages/About.jsx
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </div>
  );
}

export default About;
```

```jsx
// pages/Contact.jsx
function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Get in touch!</p>
    </div>
  );
}

export default Contact;
```

## React Router Features 

### 1. Active Link Styling

```jsx
// components/Navigation.jsx
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/" 
        className={({ isActive }) => isActive ? 'active-link' : ''}>
        Home
      </NavLink>
      <NavLink to="/about" 
        className={({ isActive }) => isActive ? 'active-link' : ''}>
        About
      </NavLink>
      <NavLink to="/contact" 
        className={({ isActive }) => isActive ? 'active-link' : ''}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navigation;
```

### 2. URL Parameters

```jsx
// App.jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/product/:id" element={<ProductDetail />} />
</Routes>
```

```jsx
// pages/ProductDetail.jsx
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Product Details</h1>
      <p>Viewing product with ID: {id}</p>
    </div>
  );
}

export default ProductDetail;
```

### 3. Nested Routes

```jsx
// App.jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/products" element={<Products />}>
    <Route index element={<ProductsList />} />
    <Route path=":id" element={<ProductDetail />} />
  </Route>
  <Route path="/contact" element={<Contact />} />
</Routes>
```

```jsx
// pages/Products.jsx
import { Outlet } from 'react-router-dom';

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Outlet />
    </div>
  );
}

export default Products;
```

### 4. Programmatic Navigation

```jsx
// components/LoginButton.jsx
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // Perform login logic
    // ...
    
    // Navigate to dashboard after login
    navigate('/dashboard');
  };
  
  return <button onClick={handleLogin}>Login</button>;
}

export default LoginButton;
```

### 5. Protected Routes

```jsx
// components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <Outlet />;
}

export default ProtectedRoute;
```

```jsx
// App.jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  
  <Route element={<ProtectedRoute isAuthenticated={user !== null} />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
  </Route>
  
  <Route path="*" element={<NotFound />} />
</Routes>
```

### 6. Handling 404 Pages

```jsx
// App.jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  {/* This will catch all unmatched routes */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

```jsx
// pages/NotFound.jsx
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
}

export default NotFound;
```
