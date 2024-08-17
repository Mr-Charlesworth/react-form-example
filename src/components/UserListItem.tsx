import { FC } from "react";

import { Link } from "react-router-dom";

import UserModel from "../models/user";

const UserListItem: FC<{ user: UserModel }> = ({ user }) => {
  return (
    <div className="card">
      <div className="card-body">
        <p>{`Username: ${user.username}`}</p>
        <Link to={`/users/{username}`}>More Details</Link>
      </div>
    </div>
  )
};

export default UserListItem;