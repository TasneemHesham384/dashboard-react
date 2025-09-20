import React, { useEffect, useState } from "react";

const rowPerPage = 10;
const statusMap = {
  "تم استلام البلاغ": "new",
  "قيد المراجعة": "review",
  "قيد المعالجة": "process",
  "تم الحل": "solved",
  "تم الإغلاق": "closed",
};

const ReceivedReports = () => {
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("الكل");
  const [search, setSearch] = useState("");
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    fetch("/src/data/report.json")
      .then((res) => res.json())
      .then((data) => {
        const r = Object.values(data.reports);
        setReports(r);
        setFilteredReports(r);
      });
  }, []);

  // ===== Filters & Search =====
  useEffect(() => {
    let filtered = [...reports];
    if (selectedStatus !== "الكل") {
      if (selectedStatus === "المستلمة")
        filtered = filtered.filter((r) => statusMap[r.status] === "new");
      else if (selectedStatus === "قيد المراجعة")
        filtered = filtered.filter((r) => statusMap[r.status] === "review");
      else if (selectedStatus === "قيد المعالجة")
        filtered = filtered.filter((r) => statusMap[r.status] === "process");
      else if (selectedStatus === "المحلولة")
        filtered = filtered.filter((r) => statusMap[r.status] === "solved");
      else if (selectedStatus === "المغلقة")
        filtered = filtered.filter((r) => statusMap[r.status] === "closed");
    }
    if (search.trim() !== "") {
      filtered = filtered.filter((r) =>
        r.id.toString().toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredReports(filtered);
    setCurrentPage(1);
  }, [selectedStatus, search, reports]);

  const pageCount = Math.ceil(filteredReports.length / rowPerPage);
  const startIndex = (currentPage - 1) * rowPerPage;
  const paginatedItems = filteredReports.slice(
    startIndex,
    startIndex + rowPerPage
  );

  const getVisiblePages = () => {
    const start = Math.floor((currentPage - 1) / 3) * 3 + 1;
    return Array.from(
      { length: Math.min(3, pageCount - start + 1) },
      (_, i) => start + i
    );
  };

  const updateStatus = (id, status) => {
    setReports((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    fetch(`/api/reports/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => console.log("تم التحديث:", data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="wrapperr mt-5 mb-5">
      <div className="users-head d-flex align-items-center justify-content-between">
        <h3 className="fw-bold">البلاغات المستلمة</h3>
      </div>

      <div className="users-table">
        <div className="table-filter d-flex align-items-center justify-content-between pb-3">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="الكل">الكل</option>
            <option value="المستلمة">المستلمة</option>
            <option value="قيد المراجعة">قيد المراجعة</option>
            <option value="قيد المعالجة">قيد المعالجة</option>
            <option value="المحلولة">المحلولة</option>
            <option value="المغلقة">المغلقة</option>
          </select>
          <input
            type="text"
            placeholder="id البلاغ"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ paddingRight: "35px" }}
          />
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>نوع البلاغ</th>
              <th>العنوان</th>
              <th>الدور</th>
              <th>التاريخ</th>
              <th>الحالة</th>
              <th>عرض المزيد</th>
            </tr>
          </thead>
          <tbody>
            {paginatedItems.map((report) => {
              const statusOptions = Object.keys(statusMap);
              return (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.report_type}</td>
                  <td>{report.location}</td>
                  <td>{report.contact_info}</td>
                  <td>{report.incident_date}</td>
                  <td>
                    {/* Dropdown */}
                    <div className="dropdown reportStatus">
                      <button
                        className={`btn btn-secondary dropdown-toggle ${
                          statusMap[report.status]
                        }`}
                        onClick={() =>
                          setOpenDropdownId(
                            openDropdownId === report.id ? null : report.id
                          )
                        }
                      >
                        {report.status || "اختر الحالة"}
                      </button>
                      <ul
                        className={`dropdown-menu ${
                          openDropdownId === report.id ? "show" : ""
                        }`}
                      >
                        {statusOptions.map((status) => (
                          <li key={status}>
                            <a
                              href="#"
                              className={`dropdown-item ${statusMap[status]} ${
                                report.status === status ? "active" : ""
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                updateStatus(report.id, status);
                                setOpenDropdownId(null);
                              }}
                            >
                              {status}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td>
                    {/* Modal Trigger */}
                    <button
                      className="btn-primary btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target={`#reportModal${report.id}`}
                    >
                      عرض المزيد
                    </button>

                    {/* Modal */}
                    <div
                      className="modal fade"
                      id={`reportModal${report.id}`}
                      tabIndex="-1"
                      aria-labelledby={`reportModalLabel${report.id}`}
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg modal-dialog-scrollable">
                        <div className="modal-content">
                          <div className="modal-header d-flex justify-content-between align-items-center flex-row-reverse">
                            <h5
                              className="modal-title"
                              id={`reportModalLabel${report.id}`}
                            >
                              تفاصيل البلاغ #{report.id}
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body text-start">
                            <p>
                              <strong>نوع البلاغ:</strong> {report.report_type}
                            </p>
                            <p>
                              <strong>العنوان (google maps):</strong>{" "}
                              <a href={report.location_link} target="_blank">
                                {report.location}
                              </a>
                            </p>
                            <p>
                              <strong>التاريخ:</strong> {report.incident_date}
                            </p>
                            <p>
                              <strong>معلومات الاتصال:</strong>{" "}
                              {report.contact_info}
                            </p>
                            <p>
                              <strong>حالة البلاغ:</strong> {report.status}
                            </p>
                            <hr />
                            <p>
                              <strong>تفاصيل البلاغ:</strong>{" "}
                              {report.report_details}
                            </p>
                            <hr />
                            <p>
                              <strong>معلومات الجناة:</strong>
                            </p>
                            <ul>
                              {report.criminal_infos?.length
                                ? report.criminal_infos.map((c, i) => (
                                    <li key={i}>
                                      {c.name} - {c.description}{" "}
                                      {c.other_info ? "- " + c.other_info : ""}
                                    </li>
                                  ))
                                : "لا يوجد معلومات"}
                            </ul>
                            <hr />
                            <p>
                              <strong>المرفقات:</strong>
                            </p>
                            <ul>
                              {report.attachments?.length
                                ? report.attachments.map((a, i) => (
                                    <li key={i}>
                                      {a.file ? (
                                        <a href={a.file} target="_blank">
                                          {a.file}
                                        </a>
                                      ) : a.audio_recording ? (
                                        <a
                                          href={a.audio_recording}
                                          target="_blank"
                                        >
                                          {a.audio_recording}
                                        </a>
                                      ) : null}
                                    </li>
                                  ))
                                : "لا يوجد مرفقات"}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination */}
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className={`page-item ${currentPage <= 3 ? "disabled" : ""}`}>
              <a
                href="#"
                className="page-link"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(Math.max(1, currentPage - 3));
                }}
              >
                &laquo;
              </a>
            </li>

            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <a
                href="#"
                className="page-link"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(Math.max(1, currentPage - 1));
                }}
              >
                &lsaquo;
              </a>
            </li>

            {getVisiblePages().map((num) => (
              <li
                key={num}
                className={`page-item ${currentPage === num ? "active" : ""}`}
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(num);
                  }}
                >
                  {num}
                </a>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === pageCount ? "disabled" : ""
              }`}
            >
              <a
                href="#"
                className="page-link"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(Math.min(pageCount, currentPage + 1));
                }}
              >
                &rsaquo;
              </a>
            </li>

            <li
              className={`page-item ${
                currentPage >= pageCount - 2 ? "disabled" : ""
              }`}
            >
              <a
                href="#"
                className="page-link"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(Math.min(pageCount, currentPage + 3));
                }}
              >
                &raquo;
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ReceivedReports;
