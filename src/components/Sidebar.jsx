import { NavLink } from "react-router-dom";
// import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar text-center">
      <div className="logo position-relative fw-bold pt-4 pb-4 text-white d-flex align-items-center justify-content-center">
        <div className="icon me-2">
          <span className="petal p1"></span>
          <span className="petal p2"></span>
          <span className="petal p3"></span>
          <span className="petal p4"></span>
        </div>
        <span className="logo-text">لوحة التحكم</span>
      </div>

      <ul className="list-unstyled text-center nav">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `d-flex align-items-center fs-14 c-black rad-6 p-10 ms-10 me-10 ${
                isActive ? "active" : ""
              }`
            }
          >
            <i className="fa-solid fa-chart-line ms-2"></i>
            <span>الصفحة الرئيسية</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/received-report"
            className={({ isActive }) =>
              `d-flex align-items-center fs-14 c-black rad-6 p-10 ${
                isActive ? "active" : ""
              }`
            }
          >
            <i className="fa-solid fa-file-arrow-down ms-2"></i>
            <span>التقارير المستلمة</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              `d-flex align-items-center fs-14 c-black rad-6 p-10 ${
                isActive ? "active" : ""
              }`
            }
          >
            <i className="fa-solid fa-chart-bar ms-2"></i>
            <span>الإحصائيات</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `d-flex align-items-center fs-14 c-black rad-6 p-10 ${
                isActive ? "active" : ""
              }`
            }
          >
            <i className="fa-solid fa-graduation-cap fa-fw ms-2"></i>
            <span>إدارة المستخدمين</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/setting"
            className={({ isActive }) =>
              `d-flex align-items-center fs-14 c-black rad-6 p-10 ${
                isActive ? "active" : ""
              }`
            }
          >
            <i className="fa-solid fa-gear fa-fw ms-2"></i>
            <span>الإعدادات</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/archive"
            className={({ isActive }) =>
              `d-flex align-items-center fs-14 c-black rad-6 p-10 ${
                isActive ? "active" : ""
              }`
            }
          >
            <i className="fa-regular fa-file fa-fw ms-2"></i>
            <span>الأرشيف</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/privacy"
            className={({ isActive }) =>
              `d-flex align-items-center fs-14 c-black rad-6 p-10 ${
                isActive ? "active" : ""
              }`
            }
          >
            <i className="fa-solid fa-user-shield ms-2"></i>
            <span>سياسة الخصوصية</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
