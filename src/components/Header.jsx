import { useEffect, useState } from "react";

const Header = () => {
  const [isLight, setIsLight] = useState(
    localStorage.getItem("theme") === "true"
  );

  // تحديث الـ DOM حسب الثيم
  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("theme", isLight);
    window.dispatchEvent(
      new CustomEvent("themeChanged", { detail: { isLight } })
    );
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  return (
    <header className="mb-4">
      <div className="wrapper d-flex flex-wrap align-items-center justify-content-between mt-3 gap-3">
        <div className="search position-relative">
          <form>
            <input
              type="text"
              className="font-white-50"
              placeholder="اكتب كلمة مفتاحية"
              style={{ paddingRight: "35px" }}
            />
          </form>
        </div>

        <div className="options d-flex align-items-center justify-content-between gap-3">
          <div className="notifications d-flex">
            <div className="notification me-3 position-relative">
              <i className="fa-regular fa-bell"></i>
              <div
                className="notification-popup position-absolute top-100 start-50 translate-middle-x bg-white text-dark p-2 rounded shadow"
                id="newReportPopup"
              >
                <p className="mb-0">تم استلام بلاغ جديد!</p>
              </div>
            </div>
            <div className="comments">
              <i className="fa-regular fa-comment-dots"></i>
            </div>
            <div className="setting">
              <i className="fa-solid fa-gear fa-fw ms-2"></i>
            </div>
          </div>

          <div
            className={`night d-flex justify-content-between align-items-center ${
              isLight ? "active" : ""
            }`}
            onClick={toggleTheme}
          >
            <span className="indicator"></span>
            <i className="fa-regular fa-moon"></i>
            <i className="fa-regular fa-sun"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
