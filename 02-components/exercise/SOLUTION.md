# Profile Card Gallery - Solution Guide

This guide provides step-by-step instructions for implementing the Profile Card Gallery exercise.

## Step 1: Set Up Project Structure

Create a basic file structure:
```jsx
/exercise
  /src
    App.jsx
    index.css
    main.jsx
    ProfileCard.jsx
    ProfileHeader.jsx
    ProfileBio.jsx
    ProfileLink.jsx
    ProfileLinks.jsx
  index.html
```

## Step 2: Create Profile Data

In App.jsx, create an array of profile data:

```jsx
const profiles = [
  {
    id: 1,
    name: "John Doe",
    occupation: "Frontend Developer",
    location: "Toronto, Canada",
    links: [
      { text: "GitHub", href: "https://github.com", target: "_blank" },
      { text: "Twitter", href: "https://twitter.com", target: "_blank" }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    occupation: "UX Designer",
    location: "Vancouver, Canada",
    links: [
      { text: "GitHub", href: "https://github.com", target: "_blank" },
      { text: "LinkedIn", href: "https://linkedin.com", target: "_blank" }
    ]
  },
  {
    id: 3,
    name: "Alex Johnson",
    occupation: "Backend Developer",
    location: "Montreal, Canada",
    links: [
      { text: "GitHub", href: "https://github.com", target: "_blank" },
      { text: "Twitter", href: "https://twitter.com", target: "_blank" }
    ]
  }
];
```

## Step 3: Create Basic Components

### ProfileHeader Component
```jsx
// ProfileHeader.jsx
function ProfileHeader({ name }) {
  return <h2>{name}</h2>;
}

export default ProfileHeader;
```

### ProfileBio Component
```jsx
// ProfileBio.jsx
function ProfileBio({ occupation, location }) {
  return (
    <div>
      <p>{occupation}</p>
      <p>{location}</p>
    </div>
  );
}

export default ProfileBio;
```

### ProfileLink Component
```jsx
// ProfileLink.jsx
function ProfileLink({ children, ...otherProps }) {
  return (
    <a {...otherProps} rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default ProfileLink;
```

### ProfileLinks Component
```jsx
// ProfileLinks.jsx
import ProfileLink from './ProfileLink';

function ProfileLinks({ links }) {
  return (
    <div className="profile-links">
      {links.map((link, index) => (
        <ProfileLink 
          key={index} 
          href={link.href} 
          target={link.target}
        >
          {link.text}
        </ProfileLink>
      ))}
    </div>
  );
}

export default ProfileLinks;
```

## Step 4: Create ProfileCard Component

```jsx
// ProfileCard.jsx
import ProfileHeader from './ProfileHeader'
import ProfileBio from './ProfileBio'
import ProfileLinks from './ProfileLinks'

function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <ProfileHeader name={profile.name} />
      <ProfileBio 
        occupation={profile.occupation} 
        location={profile.location} 
      />
      <ProfileLinks links={profile.links} />
    </div>
  );
}

export default ProfileCard;
```

## Step 5: Create App Component with Form to Add Profiles

```jsx
// App.jsx
import { useState } from 'react';
import ProfileCard from './ProfileCard';

function App() {
  const initialProfiles = [
    {
      id: 1,
      name: "John Doe",
      occupation: "Frontend Developer",
      location: "Toronto, Canada",
      links: [
        { text: "GitHub", href: "https://github.com", target: "_blank" },
        { text: "Twitter", href: "https://twitter.com", target: "_blank" }
      ]
    },
  ];

  const [profiles, setProfiles] = useState(initialProfiles);
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [location, setLocation] = useState("");

  // Form input change handlers
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleOccupationChange = (event) => {
    setOccupation(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = () => {
    const newProfile = {
      id: profiles.length + 1,
      name,
      occupation,
      location,
      links: [
        { text: "GitHub", href: "https://github.com", target: "_blank" },
        { text: "Twitter", href: "https://twitter.com", target: "_blank" }
      ]
    };

    setProfiles([...profiles, newProfile]);

    setName("");
    setOccupation("");
    setLocation("");
  };

  return (
    <>
      <h1>Profile Card Gallery</h1>
      
      <div className="profile-form">
        <h2>Add New Profile</h2>
        <div>
          <label>Name</label>
          <br />
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Occupation</label>
          <br />
          <input type="text" value={occupation} onChange={handleOccupationChange} />
        </div>
        <div>
          <label>Location</label>
          <br />
          <input type="text" value={location} onChange={handleLocationChange} />
        </div>
        <button onClick={handleSubmit}>Add Profile</button>
      </div>

      <div className="card-container">
        {profiles.map(profile => (
          <ProfileCard 
            key={profile.id}
            profile={profile}
          />
        ))}
      </div>
    </>
  );
}

export default App;
```

## Step 6: Update Basic Styling

```css
/* index.css */
.profile-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
}

.profile-form {
  margin-bottom: 20px;
}

.profile-form input {
  margin-bottom: 10px;
}
```

## Advanced Steps (Optional)

1. Enhance ProfileLinks to display icons next to each link
2. Add conditional rendering for optional profile information
3. Implement form validation for required fields
4. Add ability to edit existing profiles
5. Implement option to delete profiles
6. Implement responsive styling for mobile devices
