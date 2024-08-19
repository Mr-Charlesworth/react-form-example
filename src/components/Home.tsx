import { FC, useContext } from "react";

import AuthContext, { AuthContextType } from "../store/AuthContext";

const Home: FC = () => {
  const { isLoggedIn, loggedInUser } = useContext(AuthContext) as AuthContextType;
  const greeting = isLoggedIn ? `Welcome home ${loggedInUser}!` : "Please login or register";

  return (
    <p>{greeting}</p>
  );
};

export default Home;