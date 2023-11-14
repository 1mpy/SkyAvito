import { Route, Routes } from "react-router-dom";
import Main from "../../../pages/Main/Main";
import Profile from "../../../pages/Profile/Profile";
import Adv from "../../../pages/Advertisement/Advertisement";
import Auth from "../../../pages/Auth/Auth";
import Reg from "../../../pages/Auth/Reg";
import NewAdv from "../../modal/NewAdv/NewAdv";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Seller from "../../Seller-profile/Seller";

function AppRoutes() {
  const isAuth = () => localStorage.getItem("access_token");

  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={isAuth} />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/newadv" element={<NewAdv />} />
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
