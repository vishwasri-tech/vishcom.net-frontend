import React from "react";

const Deleteaccount = () => {
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
      <h1 style={{ textAlign: "center", fontSize: "22px", fontWeight: "bold" }}>
        Account Deletion Policy
      </h1>

      <p style={{ marginTop: "20px" }}>
        If you wish to delete your account and all associated data, please send
        an email to{" "}
        <a
          href="mailto:VISHWASRITECHNOLOGIES@vishcom.net"
          style={{ color: "black", textDecoration: "none" }}
        >
          VISHWASRITECHNOLOGIES@vishcom.net
        </a>{" "}
        with the following details:
      </p>

      <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
        <li style={{ marginBottom: "8px" }}>Full Name</li>
        <li style={{ marginBottom: "8px" }}>Registered Mobile Number</li>
        <li style={{ marginBottom: "8px" }}>Registered Email Address</li>
        <li style={{ marginBottom: "8px" }}>Reason for Account Deletion</li>
      </ul>

      <p style={{ marginTop: "20px" }}>
        Once your request is submitted, Vishwasri Technologies Pvt Ltd
        ("Developer") will process it within 30 days. To ensure the security of
        your account, we recommend that you submit the request from the email
        address tied to your account. We may need to verify your identity before
        processing your request.
      </p>

      <p style={{ marginTop: "20px" }}>
        Please be aware that by deleting your account, you will lose access to
        all services offered by the app.
      </p>

      <p style={{ marginTop: "20px" }}>
        For any further assistance, feel free to reach out to us at{" "}
        <a
          href="mailto:VISHWASRITECHNOLOGIES@vishcom.net"
          style={{ color: "black", textDecoration: "none" }}
        >
          VISHWASRITECHNOLOGIES@vishcom.net
        </a>
        .
      </p>
    </div>
  );
};

export default Deleteaccount;
