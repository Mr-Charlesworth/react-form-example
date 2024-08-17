import { useState } from "react"

import { Route, Routes, useNavigate } from 'react-router-dom';

import User from "./models/user";
import RegisterRefs from "./components/RegisterRefs"
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RegisterState from "./components/RegisterState";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import UserList from "./components/UserList";

const App = () => {

  const navigate = useNavigate()

  const [otherUsers, setOtherUsers] = useState<User[]>([]);
  const [loggedInUser, setLoggedInUser] = useState('');

  const logout = () => {
    setLoggedInUser('');
    navigate('/');
  };

  const isLoggedIn = loggedInUser !== '';

  return (
    <div className="container mt-3">
      <Navbar isLoggedIn={isLoggedIn} logout={logout} />
      <Routes>
        <Route path={'*'} element={<NotFound />} />
        <Route path={'/users'} element={<UserList users={otherUsers} />} />
        <Route path={'/'} element={<Home isLoggedIn={isLoggedIn} loggedInUser={loggedInUser} />} />
        <Route
          path={'/register-state'}
          element={<RegisterState otherUsers={otherUsers} setLoggedInUser={setLoggedInUser} setOtherUsers={setOtherUsers} />}
          />
        <Route
          path={'/register-refs'}
          element={<RegisterRefs otherUsers={otherUsers} setLoggedInUser={setLoggedInUser} setOtherUsers={setOtherUsers}/>}
        />
        <Route path={'/login'} element={<Login otherUsers={otherUsers} setLoggedInUser={setLoggedInUser} />} />
      </Routes>
    </div>
  )
}

export default App
