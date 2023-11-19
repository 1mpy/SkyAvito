import { Route, Routes } from "react-router-dom";
import Main from "../../../pages/Main/Main";
import Profile from "../../../pages/Profile/Profile";
import Adv from "../../../pages/Advertisement/Advertisement";
import Auth from "../../../pages/Auth/Auth";
import Reg from "../../../pages/Auth/Reg";
import NewAdv from "../../modal/NewAdv/NewAdv";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Seller from "../../Seller-profile/Seller";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/userSlice";
import { useEffect } from "react";

function AppRoutes() {
  const dispatch = useDispatch();

  const setCurrentUser = (value) => dispatch(setUser(value));
  const isAuth = () => {
    const token = localStorage.getItem("access_token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) setCurrentUser(user);
    return token && user;
  };

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={isAuth} />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/seller/:id" element={<Seller />} />
      <Route path="/adv/:id" element={<Adv />} />
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/reg" element={<Reg />} />
    </Routes>
  );
}

export default AppRoutes;

// http://localhost:8090/
