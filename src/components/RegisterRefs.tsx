import { FC, useRef, useState } from "react";

import { css } from "@emotion/css";

import UserModel from "../models/User";
import { validateConfirmation, validatePassword, validateUsername } from "../utils/userValidation";

const RegisterRefs: FC<{
  users: UserModel[],
  setUsers: React.Dispatch<React.SetStateAction<UserModel[]>>,
  setLoggedInUser: React.Dispatch<React.SetStateAction<string>>,
}> = ({ users, setUsers, setLoggedInUser }) => {

  const [usernameErrors, setUsernameError] = useState<string[]>([]);
  const [passwordErrors, setPasswordError] = useState<string[]>([]);
  const [confirmationErrors, setConfirmationError] = useState<string[]>([]);

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmationRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = usernameRef.current!.value;
    const password = passwordRef.current!.value;
    const confirmation = confirmationRef.current!.value;

    const newUsernameErrors = validateUsername(username, users.map((u) => u.username));
    const newPasswordErrors = validatePassword(password);
    const newConfirmationErrors = validateConfirmation(password, confirmation);

    setUsernameError(() => newUsernameErrors)
    setPasswordError(() => newPasswordErrors)
    setConfirmationError(() => newConfirmationErrors)

    const hasErrors = [newUsernameErrors, newPasswordErrors, newConfirmationErrors]
      .some((errArray) => errArray.length > 0)

    if (!hasErrors) {
      setLoggedInUser(username);
      setUsers((prev) => [...prev, { username: username, password: password }]);
      alert('That went well!')
    }
  }

  const invalidFeedback = css({
    color: 'red',
    fontSize: 'small'
  })

  return (
    <>
      <h1>{"Register (Form Using Refs)"}</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="username">
            {"Username"}
          </label>
          <input ref={usernameRef} type="text" className="form-control" name="username" id="username" />
          {usernameErrors.map((feedback, i) => (
            <div key={i} className={invalidFeedback}>{feedback}</div>
          ))}
        </div>
        <div className="mb-3">
          <label htmlFor="password">
            {"Password"}
          </label>
          <input ref={passwordRef} type="password" className="form-control" name="password" id="password" />
          {passwordErrors.map((feedback, i) => (
            <div key={i} className={invalidFeedback}>{feedback}</div>
          ))}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmation">
            {"Confirmation"}
          </label>
          <input ref={confirmationRef} type="password" className="form-control" name="confirmation" id="confirmation" />
          {confirmationErrors.map((feedback, i) => (
            <div key={i} className={invalidFeedback}>{feedback}</div>
          ))}
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </>
  );
};

export default RegisterRefs;