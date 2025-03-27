import ProfileHeader from './ProfileHeader';
import ProfileBio from './ProfileBio';
import ProfileLinks from './ProfileLinks';

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
