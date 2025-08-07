import React, { useEffect } from "react";
import Footer from "../components/Footer";
import "../App.css";

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p>
          We value your privacy and are committed to protecting your personal
          information. This policy explains how we collect, use, and safeguard
          your data.
        </p>
        <ul>
          <li>We collect only the necessary data to provide services.</li>
          <li>Your data is stored securely and not shared without consent.</li>
          <li>You can contact us at any time to review or delete your data.</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Privacy;
