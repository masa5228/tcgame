import React from 'react';
import './InfoCard.css';

const InfoCard = ({ icon, title, items }) => {
  return (
    <div className="info-card">
      {icon && <div className="info-card-icon">{icon}</div>}
      <h3 className="info-card-title">{title}</h3>
      <ul className="info-card-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;
