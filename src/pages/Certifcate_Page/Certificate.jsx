import React from 'react';
import './Certificate.css';
import one from '../../assets/full_stack_certificate.jpg'
import two from '../../assets/Nsdc-certificate.jpg'
import react from '../../assets/react_certificate.png'
import Javascript from '../../assets/javascript_certrificate.png'
import Gihub from '../../assets/Git_hub_certificate.png'
import backend from '../../assets/backend.png'
import Dsa from '../../assets/dsa_certificate.png'
import capston from '../../assets/capston_project_certificate.png'

const certificates = [
  {
    title: 'React Developer',
    image: react,
  },
  {
    title: 'JavaScript Mastery',
    image: Javascript,
  },
  {
    title: 'Node.js Backend',
    image: backend,
  },
  {
    title: 'Github',
    image: Gihub,
  },
  {
    title: 'Data Structures and Algorithms',
    image: Dsa,
  },
  {
    title: 'Full Stack Capston Project',
    image: capston,
  },
];

const trainingCertificates = [
  {
    title: 'Internshala Full Stack Training',
    image: one,
  },
  {
    title: 'Microland Onboarding Training',
    image: two,
  },
];

function Certificate() {
  return (
    <div className="certificate-container">
      <h2 className="certificate-title">My Certificates</h2>
      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="card-back">
                <h3>{cert.title}</h3>
                <p>Click to enlarge or view full certificate</p>
              </div>
            </div>
          </div>
        ))}
      </div>

     
      <h2 className="training-title">Training Certificates</h2>
      <div className="training-grid fade-in">
        {trainingCertificates.map((cert, index) => (
          <div className="training-card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="card-back">
                <h3>{cert.title}</h3>
                <p>Click to enlarge or view full certificate</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
