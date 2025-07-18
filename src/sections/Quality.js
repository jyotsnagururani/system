import React from 'react';
import qualityImg from '../image/cat.jpg';

function Quality() {
  return (
    <section className="quality">
      <p className="quality-desc">Exploring our tailored services for your businesses.</p>
      <div className="quality-content">
        <img src={qualityImg} alt="Quality Visual" />
        <h2>Quality</h2>
      </div>
    </section>
  );
}

export default Quality;

/*import React from 'react';
import qualityImg from '../image/cat.jpg';

function Quality() {
  return (
    <section className="section quality">
      <div className="quality-content">
        <h2>Exploring Our Tailored Services for Your Businesses</h2>
      </div>
      <img src={qualityImg} alt="Quality" className="quality-img" />
    
    </section>
  );
}

export default Quality;*/

