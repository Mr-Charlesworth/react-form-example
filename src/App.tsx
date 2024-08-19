import { useEffect, useState } from "react"

import { useNavigate } from 'react-router-dom';

import User from "./models/user";
import AuthContext from "./store/AuthContext";
import Dashboard from "./components/Dashboard";

const App = () => {

  const navigate = useNavigate();

  const storedUsers = JSON.parse(localStorage.getItem('users') as string) as User[] || []
  const storedLoggedInUser = localStorage.getItem('loggedInUser') || ''

  const [otherUsers, setOtherUsers] = useState<User[]>(storedUsers);
  const [loggedInUser, setLoggedInUser] = useState(storedLoggedInUser);

  useEffect(() => {
    localStorage.setItem('loggedInUser', loggedInUser)
  }, [loggedInUser]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(otherUsers))
  }, [otherUsers]);

  const logout = () => {
    setLoggedInUser('');
    navigate('/');
  };

  const login = (username: string) => {
    setLoggedInUser(username);
  };

  const addUser = (newUser: User) => {
    setOtherUsers((prev) => [...prev, newUser]);
  }

  const isLoggedIn = loggedInUser !== '';

  return (
    <AuthContext.Provider value={{
      users: otherUsers,
      loggedInUser: loggedInUser,
      addUser: addUser,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
    }} >
      <Dashboard/>
    </AuthContext.Provider>
  )
}

export default App
