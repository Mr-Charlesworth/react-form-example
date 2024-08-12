import { FC, useEffect, useState } from "react";

import { css } from "@emotion/css";

import User from "../models/user";
import { validateConfirmation, validatePassword, validateUsername } from "../utils/userValidation";

const RegisterState: FC<{
  otherUsers: User[],
  setLoggedInUser: React.Dispatch<React.SetStateAction<string>>,
  setOtherUsers: React.Dispatch<React.SetStateAction<User[]>>,
}> = ({ otherUsers, setLoggedInUser, setOtherUsers }) => {

  const [usernameErrors, setUsernameError] = useState<string[]>([])
  const [passwordErrors, setPasswordError] = useState<string[]>([])
  const [confirmationErrors, setConfirmationError] = useState<string[]>([])

  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    confirmation: '',
  });

  const [touched, setTouched] = useState({
    username: false,
    password: false,
    confirmation: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    setTouched((prev) => ({
      ...prev,
      [e.target.name]: true,
    }))
  }

  useEffect(() => {
    setUsernameError(() => validateUsername(formValues.username, otherUsers.map((u) => u.username)));
    setPasswordError(() => validatePassword(formValues.password));
    setConfirmationError(() => validateConfirmation(formValues.password, formValues.confirmation));
  }, [formValues, otherUsers])

  const submitHandler = () => {

    const hasErrors = (
      usernameErrors.length > 0 ||
      passwordErrors.length > 0 ||
      confirmationErrors.length > 0
    )

    if (!hasErrors) {
      setLoggedInUser(formValues.username);
      setOtherUsers((prev) => [...prev, { username: formValues.username, password: formValues.password }])
    }

  }

  const invalidFeedback = css({
    color: 'red',
    fontSize: 'small'
  })

  return (
    <>
      <h1>{"Register (Form Using State)"}</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="username">
            {"Username"}
          </label>
          <input onChange={handleChange} type="text" className="form-control" name="username" id="username" />
          {touched.username && usernameErrors.map((feedback, i) => (
            <div key={i} className={invalidFeedback}>{feedback}</div>
          ))}
        </div>
        <div className="mb-3">
          <label htmlFor="password">
            {"Password"}
          </label>
          <input onChange={handleChange} type="password" className="form-control" name="password" id="password" />
          {touched.password && passwordErrors.map((feedback, i) => (
            <div key={i} className={invalidFeedback}>{feedback}</div>
          ))}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmation">
            {"Confirmation"}
          </label>
          <input onChange={handleChange} type="password" className="form-control" name="confirmation" id="confirmation" />
          {touched.confirmation && confirmationErrors.map((feedback, i) => (
            <div key={i} className={invalidFeedback}>{feedback}</div>
          ))}
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </>
  );
};

export default RegisterState;