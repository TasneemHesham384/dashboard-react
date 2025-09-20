// src/routes/AppRoutes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Users from "../pages/Users";
import ReceivedReport from "../pages/ReceivedReport";
// import Statistics from "../pages/Statistics";
import Setting from "../pages/Setting";
import Archive from "../pages/Archive";
import Privacy from "../pages/Privacy";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} /> {/* الصفحة الرئيسية */}
        <Route path="users" element={<Users />} />
        <Route path="received-report" element={<ReceivedReport />} />
        <Route path="setting" element={<Setting />} />
        <Route path="archive" element={<Archive />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
