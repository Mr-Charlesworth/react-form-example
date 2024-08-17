import { FC } from "react";

const Home: FC<{ loggedInUser: string, isLoggedIn: boolean }> = ({ loggedInUser, isLoggedIn }) => {

  const greeting = isLoggedIn ? `Welcome home ${loggedInUser}!` : "Please login or register";

  return (
    <p>{greeting}</p>
  );
};

export default Home;