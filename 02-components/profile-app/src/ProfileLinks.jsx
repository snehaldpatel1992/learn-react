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
