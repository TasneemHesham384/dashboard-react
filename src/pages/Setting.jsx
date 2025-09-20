const Setting = () => {
  return (
    <div className="wrapperr mt-5 mb-5">
      <div className="users-head d-flex align-items-center justify-content-between">
        <h3 className="fw-bold">اعدادات المستخدم</h3>
      </div>

      <div className="card">
        <div className="card-header">
          <ul
            className="nav nav-underline card-header-tabs"
            id="settingsTab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#account"
              >
                إعدادات الحساب
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#system">
                إعدادات النظام
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#appearance">
                إعدادات الواجهة والمظهر
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#notifications"
              >
                إعدادات الإشعارات
              </a>
            </li>
          </ul>
        </div>

        <div className="card-body">
          <div className="tab-content">
            {/* إعدادات الحساب */}
            <div className="tab-pane fade show active" id="account">
              <h5 className="mb-3">إعدادات الحساب</h5>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">الاسم الكامل</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="محمد أحمد"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">البريد الإلكتروني</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="user@example.com"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">الصورة الشخصية</label>
                  <input type="file" className="form-control" />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">كلمة المرور الحالية</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">كلمة مرور جديدة</label>
                    <input type="password" className="form-control" />
                  </div>
                </div>
                <button className="btn btn-primary">حفظ التغييرات</button>
              </form>
            </div>

            {/* إعدادات النظام */}
            <div className="tab-pane fade" id="system">
              <h5 className="mb-3">إعدادات النظام (للمشرفين)</h5>
              <form>
                <div className="mb-3">
                  <label className="form-label">اللغة الافتراضية للنظام</label>
                  <select className="form-select">
                    <option>العربية</option>
                    <option>English</option>
                    <option>Français</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">المنطقة الزمنية</label>
                  <select className="form-select">
                    <option>Africa/Cairo</option>
                    <option>Europe/London</option>
                    <option>Asia/Dubai</option>
                  </select>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="adminAccess"
                  />
                  <label className="form-check-label" htmlFor="adminAccess">
                    تفعيل صلاحيات المشرف المتقدمة
                  </label>
                </div>
                <button className="btn btn-primary">
                  تحديث إعدادات النظام
                </button>
              </form>
            </div>

            {/* إعدادات الواجهة والمظهر */}
            <div className="tab-pane fade" id="appearance">
              <h5 className="mb-3">إعدادات الواجهة والمظهر</h5>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">الثيم</label>
                    <select className="form-select">
                      <option>فاتح</option>
                      <option>داكن</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">نوع الخط</label>
                    <select className="form-select">
                      <option>Roboto</option>
                      <option>Inter</option>
                      <option>Segoe UI</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">اللون الأساسي</label>
                    <input
                      type="color"
                      className="form-control form-control-color"
                      defaultValue="#462f8a"
                    />
                  </div>
                </div>
                <button className="btn btn-primary">حفظ المظهر</button>
              </form>
            </div>

            {/* إعدادات الإشعارات */}
            <div className="tab-pane fade" id="notifications">
              <h5 className="mb-3">إعدادات الإشعارات</h5>
              <form>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="emailNoti"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="emailNoti">
                    إشعارات البريد الإلكتروني
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="pushNoti"
                  />
                  <label className="form-check-label" htmlFor="pushNoti">
                    إشعارات داخل التطبيق
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="smsNoti"
                  />
                  <label className="form-check-label" htmlFor="smsNoti">
                    تنبيهات عبر الرسائل القصيرة
                  </label>
                </div>
                <button className="btn btn-primary">تحديث الإشعارات</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
