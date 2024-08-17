import { FC } from "react";

import { css } from "@emotion/css";

import { Link } from "react-router-dom";


const Navbar: FC<{ isLoggedIn: boolean, logout: () => void }> = ({ isLoggedIn, logout }) => {

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
            <Link className="nav-link" to={'/register-refs'}>{"Register (refs)"}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/register-state'}>{"Register (state)"}</Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Navbar;