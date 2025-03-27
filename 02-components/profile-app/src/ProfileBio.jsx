function ProfileBio({ occupation, location }) {
    return (
        <>
            <p>{occupation}</p>
            <p>Based in {location}</p>
        </>
    );
}

export default ProfileBio;