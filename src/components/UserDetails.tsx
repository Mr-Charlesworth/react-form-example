import { FC, useContext } from "react";

import { useParams } from "react-router-dom";

import NotFound from "./NotFound";
import AuthContext, { AuthContextType } from "../store/AuthContext";

const UserDetails: FC = () => {
  const { username } = useParams();
  const { users } = useContext(AuthContext) as AuthContextType;
  const user = users.find((u) => u.username === username);

  if (!user) {
    return (<NotFound/>)
  }

  return (
    <div className="card">
      <div className="card-body">
        <p>{`Username: ${user.username}`}</p>
        <p>{`Password: ${user.password}`}</p>
      </div>
    </div>
  );
};

export default UserDetails;