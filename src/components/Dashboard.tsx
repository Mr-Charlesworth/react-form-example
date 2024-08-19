import { Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import NotFound from "./NotFound";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import Home from "./Home";
import RegisterState from "./RegisterState";
import Login from "./Login";

const Dashboard = () => {
  return (
    <div className="container mt-3">
      <Navbar />
      <Routes>
        <Route path={'*'} element={<NotFound />} />
        <Route path={'/users'} element={<UserList />} />
        <Route path={'/users/:username'} element={<UserDetails />} />
        <Route path={'/'} element={<Home />} />
        <Route
          path={'/register-state'}
          element={<RegisterState />}
        />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </div>
  )
};

export default Dashboard;