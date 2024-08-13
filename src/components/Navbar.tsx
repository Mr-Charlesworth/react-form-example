import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to={'/'}>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/login'}>{"Login"}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/register-refs'}>{"Register (refs)"}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/register-state'}>{"Register (state)"}</Link>
      </li>
    </ul>
  );
};

export default Navbar;