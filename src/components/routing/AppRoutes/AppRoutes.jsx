import { Route, Routes } from "react-router-dom";
import Main from "../../../pages/Main/Main";
import Profile from "../../../pages/Profile/Profile";
import Adv from "../../../pages/Advertisement/Advertisement";
import Auth from "../../../pages/Auth/Auth";
import Reg from "../../../pages/Auth/Reg";
import NewAdv from "../../modal/NewAdv/NewAdv";
import Reviews from "../../modal/Reviews/Reviews";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function AppRoutes() {
  const isAuth = localStorage.getItem("access_token");

  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={Boolean(isAuth)} />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/adv/:id" element={<Adv />} />
        <Route path="/newadv" element={<NewAdv />} />
        <Route path="/reviews" element={<Reviews />} />
      </Route>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/reg" element={<Reg />} />
    </Routes>
  );
}

export default AppRoutes;

// http://localhost:8090/
