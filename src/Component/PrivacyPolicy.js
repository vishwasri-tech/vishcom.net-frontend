import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        fontSize: "16px",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>
        Privacy Policy
      </h1>
      <p style={{ marginTop: "20px" }}>
        At Vishwasri Technologies, we are committed to safeguarding your privacy
        and ensuring the security of your data.
      </p>

      <h2 style={{ fontSize: "20px", marginTop: "30px" }}>Data Collection</h2>
      <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
        <li style={{ marginBottom: "10px" }}>
          <strong>Personal Information:</strong> We collect your name, email
          address, phone number, and other necessary contact details to provide
          our services.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Company Information:</strong> Corporate clients do not need to
          provide company details through the app. They can directly contact us
          to discuss their service requirements.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Project Data:</strong> Specific project requirements and
          preferences are collected through direct calls or emails to help us
          tailor our solutions effectively.
        </li>
      </ul>

      <h2 style={{ fontSize: "20px", marginTop: "30px" }}>Data Usage</h2>
      <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
        <li style={{ marginBottom: "10px" }}>
          <strong>Service Delivery:</strong> Your information helps us provide
          and execute services efficiently.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Customer Support:</strong> We use your contact information to
          assist with inquiries and resolve issues promptly.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Improvement and Optimization:</strong> Technical data is
          analyzed to enhance the performance and functionality of our platforms.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Compliance:</strong> Collected data is used to meet legal and
          regulatory requirements when applicable.
        </li>
      </ul>

      <h2 style={{ fontSize: "20px", marginTop: "30px" }}>User Rights</h2>
      <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
        <li style={{ marginBottom: "10px" }}>
          <strong>Access:</strong> You can view your personal information stored
          in your profile.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Update:</strong> You can edit and update your profile details
          anytime.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Report Concerns:</strong> If you face any issues, you can
          contact our team at{" "}
          <a
            href="mailto:VISHWASRITECHNOLOGIES@vishcom.net"
            style={{ color: "black", textDecoration: "none" }}
          >
            VISHWASRITECHNOLOGIES@vishcom.net
          </a>
          .
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
