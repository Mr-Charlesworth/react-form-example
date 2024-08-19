import { FC, useContext, useEffect, useState } from "react";

import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

import { validateConfirmation, validatePassword, validateUsername } from "../utils/userValidation";
import AuthContext, { AuthContextType } from "../store/AuthContext";

const RegisterState: FC = () => {
  const { users, login, addUser } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();

  const [usernameErrors, setUsernameError] = useState<string[]>([])
  const [passwordErrors, setPasswordError] = useState<string[]>([])
  const [confirmationErrors, setConfirmationError] = useState<string[]>([])

  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    confirmation: '',
  });

  const [dirty, setDirty] = useState({
    username: false,
    password: false,
    confirmation: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setDirty((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  useEffect(() => {
    setUsernameError(() => validateUsername(formValues.username, users.map((u) => u.username)));
    setPasswordError(() => validatePassword(formValues.password));
    setConfirmationError(() => validateConfirmation(formValues.password, formValues.confirmation));
  }, [formValues, users]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasErrors = [usernameErrors, passwordErrors, confirmationErrors]
      .some((errArray) => errArray.length > 0);

    if (!hasErrors) {
      login(formValues.username);
      addUser({ username: formValues.username, password: formValues.password });
      navigate('/');
    }

  };

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
          {dirty.username && usernameErrors.map((feedback, i) => (
            <div key={i} className={invalidFeedback}>{feedback}</div>
          ))}
        </div>
        <div className="mb-3">
          <label htmlFor="password">
            {"Password"}
          </label>
          <input onChange={handleChange} type="password" className="form-control" name="password" id="password" />
          {dirty.password && passwordErrors.map((feedback, i) => (
            <div key={i} className={invalidFeedback}>{feedback}</div>
          ))}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmation">
            {"Confirmation"}
          </label>
          <input onChange={handleChange} type="password" className="form-control" name="confirmation" id="confirmation" />
          {dirty.confirmation && confirmationErrors.map((feedback, i) => (
            <div key={i} className={invalidFeedback}>{feedback}</div>
          ))}
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </>
  );
};

export default RegisterState;