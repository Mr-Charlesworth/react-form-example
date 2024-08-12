const Navbar = () => {

  return (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link" href="/">{"Home"}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">{"Login"}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/register-refs">{"Register (refs)"}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/register-state">{"Register (state)"}</a>
      </li>
    </ul>
  );
};

export default Navbar;