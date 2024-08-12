import { useState } from "react"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import User from "./models/user";
import RegisterRefs from "./components/RegisterRefs"
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RegisterState from "./components/RegisterState";
import Home from "./components/Home";

const App = () => {

  const [otherUsers, setOtherUsers] = useState<User[]>([]);
  const [loggedInUser, setLoggedInUser] = useState('');

  const router = createBrowserRouter([
    { path: '/', element: <Home loggedInUser={loggedInUser} /> },
    { path: '/register-state', element: <RegisterState otherUsers={otherUsers} setLoggedInUser={setLoggedInUser} setOtherUsers={setOtherUsers} /> },
    { path: '/register-refs', element: <RegisterRefs otherUsers={otherUsers} setLoggedInUser={setLoggedInUser} setOtherUsers={setOtherUsers} /> },
    { path: '/login', element: <Login otherUsers={otherUsers} setLoggedInUser={setLoggedInUser} /> },
  ])

  return (
    <div className="container mt-3">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
