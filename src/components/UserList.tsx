import { FC, useContext } from "react"

import UserListItem from "./UserListItem"
import AuthContext, { AuthContextType } from "../store/AuthContext";

const UserList: FC = () => {
  const { users } = useContext(AuthContext) as AuthContextType;

  return users.map((user) => (<UserListItem key={user.username} user={user} />));
};

export default UserList;