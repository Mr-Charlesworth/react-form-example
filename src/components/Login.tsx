import { FC, useContext, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import AuthContext, { AuthContextType } from "../store/AuthContext";


const Login: FC = () => {
  const { users, login } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const [invalidLogin, setInvalidLogin] = useState(false)
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const username = usernameRef.current!.value;
    const password = passwordRef.current!.value;
    const foundUser = users.find((u) => u.username === username);
    if (foundUser && foundUser.password === password) {
      login(username);
      navigate('/');
    } else {
      setInvalidLogin(true);
    }
  }

  return (
    <>
      <h1>Login</h1>
      {invalidLogin && (
        <div
          className="alert alert-danger"
          role="alert"
        >
          <strong>Invalid Login</strong>
        </div>
      )}

      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="username">
            {"Username"}
          </label>
          <input ref={usernameRef} type="text" className="form-control" name="username" id="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="password">
            {"Password"}
          </label>
          <input ref={passwordRef} type="password" className="form-control" name="password" id="password" />
        </div>
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;