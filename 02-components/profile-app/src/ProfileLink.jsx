// ProfileLink.jsx - with children support
function ProfileLink({ children, ...otherProps }) {
  return (
    <a {...otherProps}>
      {children}
    </a>
  );
}

export default ProfileLink;
