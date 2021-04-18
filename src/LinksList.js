const LinkLists = ({ links }) => {
  return (
    <div className="links-list">
      {links.map((link, index) => (
        <a
          href={Object.values(link)}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <div className="link-list-item">
            <p>{Object.keys(link)}</p>
            <i className="material-icons">open_in_new</i>
          </div>
        </a>
      ))}
    </div>
  );
};

export default LinkLists;
