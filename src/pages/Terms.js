import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Terms() {
  const [accepted, setAccepted] = useState(null);
  const navigate = useNavigate();

  const handleAccept = () => {
    setAccepted(true);
    alert('You accepted the Terms & Conditions.');
    navigate('/'); 
  };

  const handleDecline = () => {
    setAccepted(false);
    alert('You declined the Terms & Conditions.');
    navigate('/'); // or navigate to a different page
  };

  return (
    <div className="terms-container" style={{ padding: '2rem' }}>
      <h1>Terms & Conditions</h1>
      <p>
        Please read these terms and conditions carefully before using our services.
        By clicking "Accept", you agree to be bound by these terms.
      </p>
      <ul>
        <li>Usage of the platform is at your own risk.</li>
        <li>You must not misuse or abuse the platform.</li>
        <li>Your data will be used in accordance with our Privacy Policy.</li>
      </ul>
      <div style={{ marginTop: '2rem' }}>
        <button onClick={handleAccept} style={{ marginRight: '1rem', padding: '0.5rem 1rem' }}>
          Accept
        </button>
        <button onClick={handleDecline} style={{ padding: '0.5rem 1rem' }}>
          Decline
        </button>
      </div>
    </div>
  );
}

export default Terms;
