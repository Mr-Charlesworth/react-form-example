import { FC } from "react";

const Home: FC<{ loggedInUser: string }> = ({ loggedInUser }) => {

  const loggedIn = loggedInUser !== ''

  return (
    <>
      {loggedIn ? (
      <p>{`Welcome home ${loggedInUser}!`}</p>
      ) : (
        <p>{"Please login or signup!"}</p>
      )}
    </>
  );
};

export default Home;