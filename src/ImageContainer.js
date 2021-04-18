const ImageContainer = ({ name }) => {
  return (
    <div className="image-container">
      <a
        href="https://github.com/AnilSeervi"
        className="profile-link"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src="https://avatars.githubusercontent.com/u/61609033?v=4"
          alt="Profile"
          width="96px"
          height="96px"
        />
        {`@${name}`}
      </a>
    </div>
  );
};

export default ImageContainer;
