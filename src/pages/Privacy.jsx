const Privacy = () => {
  const styles = {
    pageTitle: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "30px",
      color: "#6e4fc8",
      textAlign: "center",
    },
    wrapper: {
      background: "var(--box-color)",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 0 15px var(--border)",
      lineHeight: "1.8",
      maxWidth: "900px",
      margin: "40px auto",
    },
    sectionBox: {
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      padding: "25px",
      borderRadius: "10px",
      marginBottom: "30px",
      border: "1px solid #6e4fc8",
    },
    sectionTitle: {
      fontSize: "20px",
      marginBottom: "15px",
      color: "#6e4fc8",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    paragraph: {
      marginBottom: "15px",
      color: "var(--font-color)",
    },
    list: {
      paddingRight: "20px",
      marginBottom: "10px",
    },
    listItem: {
      marginBottom: "10px",
      position: "relative",
      paddingRight: "15px",
    },
  };

  return (
    <div className="content-wrapper" style={styles.wrapper}>
      <h1 style={styles.pageTitle}>سياسة الخصوصية</h1>

      <div style={styles.sectionBox}>
        <h2 style={styles.sectionTitle}>
          <i className="fa-solid fa-circle-info"></i> مقدمة
        </h2>
        <p style={styles.paragraph}>
          نحن ملتزمون بحماية خصوصيتكم عند استخدام لوحة التحكم. الهدف من هذه
          السياسة هو توضيح كيفية جمع البيانات ومعالجتها وحمايتها.
        </p>
      </div>

      <div style={styles.sectionBox}>
        <h2 style={styles.sectionTitle}>
          <i className="fa-solid fa-database"></i> المعلومات التي نجمعها
        </h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            بيانات تسجيل الدخول مثل البريد الإلكتروني وكلمة المرور.
          </li>
          <li style={styles.listItem}>
            بيانات البلاغات المستلمة بما في ذلك الموقع، التفاصيل، والمرفقات.
          </li>
          <li style={styles.listItem}>
            بيانات التفاعل مع النظام مثل الإشعارات وتفضيلات المستخدم.
          </li>
        </ul>
      </div>

      <div style={styles.sectionBox}>
        <h2 style={styles.sectionTitle}>
          <i className="fa-solid fa-chart-line"></i> كيفية استخدام البيانات
        </h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            معالجة وعرض البلاغات داخل لوحة التحكم.
          </li>
          <li style={styles.listItem}>
            إرسال الإشعارات والتنبيهات للمستخدمين المسؤولين.
          </li>
          <li style={styles.listItem}>
            تحليل الأداء والإحصاءات لتحسين النظام.
          </li>
        </ul>
      </div>

      <div style={styles.sectionBox}>
        <h2 style={styles.sectionTitle}>
          <i className="fa-solid fa-paperclip"></i> المرفقات والملفات
        </h2>
        <p style={styles.paragraph}>
          جميع الملفات المرفقة بالبلاغات، سواء كانت صوتية أو مستندات، يتم حفظها
          بأمان واستخدامها فقط للأغراض المتعلقة بالبلاغات.
        </p>
      </div>

      <div style={styles.sectionBox}>
        <h2 style={styles.sectionTitle}>
          <i className="fa-solid fa-lock"></i> حماية البيانات
        </h2>
        <p style={styles.paragraph}>
          نقوم بتطبيق أفضل معايير الأمان لحماية بيانات المستخدمين.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
