import { useState } from "react"

import { Route, Routes } from 'react-router-dom';

import UserModel from "./models/User";
import RegisterRefs from "./components/RegisterRefs"
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RegisterState from "./components/RegisterState";
import Home from "./components/Home";

const App = () => {

  const [users, setUsers] = useState<UserModel[]>([]);
  const [loggedInUser, setLoggedInUser] = useState('');

  return (
    <div className="container mt-3">
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home loggedInUser={loggedInUser} />} />
        <Route
          path={'/register-state'}
          element={<RegisterState users={users} setLoggedInUser={setLoggedInUser} setUsers={setUsers} />}
          />
        <Route
          path={'/register-refs'}
          element={<RegisterRefs users={users} setLoggedInUser={setLoggedInUser} setUsers={setUsers}/>}
        />
        <Route path={'/login'} element={<Login users={users} setLoggedInUser={setLoggedInUser} />} />
      </Routes>
    </div>
  )
}

export default App
