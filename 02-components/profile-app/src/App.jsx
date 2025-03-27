// App.jsx
import ProfileCard from './ProfileCard';

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

function App() {
  return (
    <>
      <h1>Profile Card Gallery</h1>
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