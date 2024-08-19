import { FC, useContext } from "react";

import { css } from "@emotion/css";

import { Link } from "react-router-dom";
import AuthContext, { AuthContextType } from "../store/AuthContext";


const Navbar: FC = () => {

  const { isLoggedIn, logout } = useContext(AuthContext) as AuthContextType;

  const anchor = css`
      cursor: pointer;
  `;

  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to={'/'}>Home</Link>
      </li>
      {isLoggedIn ? (
        <>
          <li className="nav-item">
            <Link className="nav-link" to={'/users'}>Show Users</Link>
          </li>
          <li className="nav-item">
            <a onClick={() => logout()} className={['nav-link', anchor].join(' ')}>Logout</a>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item">
            <Link className="nav-link" to={'/login'}>{"Login"}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/register-state'}>{"Register"}</Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Navbar;