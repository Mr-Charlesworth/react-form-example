import { FC } from "react"

import UserModel from "../models/user"
import UserListItem from "./UserListItem"

const UserList: FC<{ users: UserModel[] }> = ({ users }) => {
  return users.map((user) => (<UserListItem key={user.username} user={user} />));
};

export default UserList;