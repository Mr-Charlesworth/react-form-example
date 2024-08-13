import { useState } from "react"

import { Route, Routes } from 'react-router-dom';

import User from "./models/user";
import RegisterRefs from "./components/RegisterRefs"
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RegisterState from "./components/RegisterState";
import Home from "./components/Home";

const App = () => {

  const [otherUsers, setOtherUsers] = useState<User[]>([]);
  const [loggedInUser, setLoggedInUser] = useState('');

  return (
    <div className="container mt-3">
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home loggedInUser={loggedInUser} />} />
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
