import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="dashboard d-flex">
      <Sidebar />
      <div className="content w-100 px-3">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
