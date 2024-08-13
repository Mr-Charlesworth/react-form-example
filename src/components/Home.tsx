import { FC } from "react";

const Home: FC<{ loggedInUser: string }> = ({ loggedInUser }) => {

  const greeting = loggedInUser === '' ? "Please login or register" : `Welcome home ${loggedInUser}!`

  return (
    <p>{greeting}</p>
  );
};

export default Home;