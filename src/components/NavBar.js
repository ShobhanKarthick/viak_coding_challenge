const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <a className="nav-item nav-item-viak" href="/">
        VIAK.
      </a>
      {props.dataset.map((item, index) => {
        return (
          <a className={"nav-item"} href={item.url} style={item.style || {}}>
            {item.title}
          </a>
        );
      })}
    </div>
  );
};

export default NavBar;
