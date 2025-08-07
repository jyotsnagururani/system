import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "../App.css"; 

function Terms() {
  const [accepted, setAccepted] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const handleAccept = () => {
    setAccepted(true);
    alert("You accepted the Terms & Conditions.");
    navigate("/");
  };

  const handleDecline = () => {
    setAccepted(false);
    alert("You declined the Terms & Conditions.");
    navigate("/");
  };

  return (
    <>
      <div className="terms-container">
        <h1>Terms & Conditions</h1>
        <p>
          Please read these terms and conditions carefully before using our
          services. By clicking "Accept", you agree to be bound by these terms.
        </p>
        <ul>
          <li>Usage of the platform is at your own risk.</li>
          <li>You must not misuse or abuse the platform.</li>
          <li>Your data will be used in accordance with our Privacy Policy.</li>
        </ul>
        <div>
          <button onClick={handleAccept}>Accept</button>
          <button onClick={handleDecline}>Decline</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Terms;
