# React Components and Props

This project demonstrates how to build a user profile interface while learning React component concepts.

## Setting Up a New React Project with Vite

```bash
# Create a new project
npm create vite@latest profile-app -- --template react

# Navigate to project folder
cd profile-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## Step 1: Starting with a Monolithic Component

Start with everything in one component:

```jsx
// App.jsx
function App() {
  return (
    <>
      <h1>John Doe</h1>
      <p>Frontend developer passionate about React</p>
      <p>Based in Toronto, Canada</p>
      <div className="profile-links">
        <a href="https://github.com">GitHub</a>
        <a href="https://twitter.com">Twitter</a>
      </div>
    </>
  );
}

export default App;
```

## Step 2: Extract First Component (Without Props)

Extract the header into its own component:

```jsx
// ProfileHeader.jsx
function ProfileHeader() {
  return (
    <>
      <h1>John Doe</h1>
    </>
  );
}

export default ProfileHeader;

// App.jsx
import ProfileHeader from './ProfileHeader';

function App() {
  return (
    <>
      <ProfileHeader />
      <p>Frontend developer passionate about React</p>
      <p>Based in Toronto, Canada</p>
      <div className="profile-links">
        <a href="https://github.com">GitHub</a>
        <a href="https://twitter.com">Twitter</a>
      </div>
    </>
  );
}

export default App;
```

## Step 3: Adding Props (Making Components Reusable)

Make the header component customizable:

```jsx
// ProfileHeader.jsx
function ProfileHeader(props) {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
}

export default ProfileHeader;

// App.jsx
import ProfileHeader from './ProfileHeader';

function App() {
  return (
    <>
      <ProfileHeader 
        name="John Doe" 
      />
      <p>Frontend developer passionate about React</p>
      <p>Based in Toronto, Canada</p>
      <div className="profile-links">
        <a href="https://github.com">GitHub</a>
        <a href="https://twitter.com">Twitter</a>
      </div>
    </>
  );
}

export default App;
```

## Step 4: Destructuring Props (Better Readability)

Improve component readability with destructuring:

```jsx
// ProfileBio.jsx
function ProfileBio({ occupation, location }) {
  return (
    <>
      <p>{occupation}</p>
      <p>Based in {location}</p>
    </>
  );
}

export default ProfileBio;

// App.jsx
import ProfileHeader from './ProfileHeader';
import ProfileBio from './ProfileBio';

function App() {
  return (
    <>
      <ProfileHeader 
        name="John Doe" 
      />
      <ProfileBio 
        occupation="Frontend developer passionate about React"
        location="Toronto, Canada" 
      />
      <div className="profile-links">
        <a href="https://github.com">GitHub</a>
        <a href="https://twitter.com">Twitter</a>
      </div>
    </>
  );
}

export default App;
```

## Step 5: Prop Spreading (Forwarding Props)

First, create a basic link component with explicit props:

```jsx
// ProfileLink.jsx - without prop spreading
function ProfileLink(props) {
  return (
    <a href={props.href} target={props.target}>
      {props.text}
    </a>
  );
}

export default ProfileLink;
```

Then, improve it with prop spreading to automatically forward all HTML attributes:

```jsx
// ProfileLink.jsx - with prop spreading
function ProfileLink({ text, ...otherProps }) {
  return (
    <a {...otherProps}>
      {text}
    </a>
  );
}

export default ProfileLink;

// App.jsx
import ProfileHeader from './ProfileHeader';
import ProfileBio from './ProfileBio';
import ProfileLink from './ProfileLink';

function App() {
  return (
    <>
      <ProfileHeader 
        name="John Doe" 
      />
      <ProfileBio 
        occupation="Frontend developer passionate about React"
        location="Toronto, Canada" 
      />
      <div className="profile-links">
        {/* Now we can pass any HTML attribute to our ProfileLink */}
        <ProfileLink href="https://github.com" target="_blank" rel="noopener" className="github-link" text="GitHub" />
        <ProfileLink href="https://twitter.com" target="_blank" rel="noopener" className="twitter-link" text="Twitter" />
      </div>
    </>
  );
}

export default App;
```

## Step 6: Understanding the Children Prop

The children prop allows you to pass content between component tags, which is especially useful for components like links where you might want varied content.

Let's enhance our ProfileLink component to support both text and rich content:

```jsx
// ProfileLink.jsx - with children support
function ProfileLink({ children, ...otherProps }) {
  return (
    <a {...otherProps}>
      {children}
    </a>
  );
}

export default ProfileLink;
```

Now we can use our ProfileLink component with different types of content:

```jsx
// App.jsx with enhanced ProfileLink
import ProfileHeader from './ProfileHeader';
import ProfileBio from './ProfileBio';
import ProfileLink from './ProfileLink';

function App() {
  return (
    <>
      <ProfileHeader name="John Doe" />
      <ProfileBio 
        occupation="Frontend developer passionate about React"
        location="Toronto, Canada" 
      />
      <div className="profile-links">
        {/* Simple text content */}
        <ProfileLink href="https://github.com" target="_blank">
          GitHub
        </ProfileLink>
        
        {/* Rich content with icon and text */}
        <ProfileLink href="https://twitter.com" target="_blank">
          <span className="icon">🐦</span>
          <span>Twitter</span>
        </ProfileLink>
      </div>
    </>
  );
}

export default App;
```

By using the children prop, our ProfileLink component gains significant flexibility:
- It can contain simple text
- It can include multiple elements (icons + text)
- It allows for custom styling of inner content
- It maintains all the benefits of prop spreading for HTML attributes

This pattern is commonly used in UI libraries for components like links, buttons, cards, and any element where the inner content might vary.

## Basic CSS for the Profile Components

```css
body {
  max-width: 500px;
  margin: 0 auto;
  font-family: sans-serif;
}

.profile-card {
  padding: 10px;
}

.profile-links {
  display: flex;
  gap: 10px;
}
```
