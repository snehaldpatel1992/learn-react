# Profile Card Gallery Exercise

## Overview
This exercise reinforces the concepts from Chapters 1 and 2, focusing on components, props, state, and rendering lists. You'll create a gallery of profile cards that demonstrates component reusability, data flow through props, and form handling with state.

## Requirements

1. Create a gallery that displays multiple profile cards based on an array of data
2. Implement the following components:
   - ProfileCard (container component)
   - ProfileHeader (displays name)
   - ProfileBio (displays occupation and location)
   - ProfileLink (reusable link component)
   - ProfileLinks (displays social media links using ProfileLink)
3. Add a form that allows users to create new profiles with:
   - Name input
   - Occupation input
   - Location input
   - Submit button that adds the new profile to the gallery

## Learning Goals
- Practice component composition and reusability
- Use props to pass data between components
- Manage state with useState hook
- Handle form input and submission
- Render lists using array methods (map)
- Apply styles to components

## Getting Started
1. Organize your components following the structure outlined above
2. Use the provided data structure for profiles

## Data Structure
Use this data structure for your profiles:

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

![img.png](img.png)