import React from 'react';
import { getCardImagePath } from '../utils/csvParser';
import './CardItem.css';

const CardItem = ({ card, onClick }) => {
  return (
    <div className="card-item" onClick={() => onClick(card)}>
      <div className="card-item-image">
        <img
          src={getCardImagePath(card.NAME)}
          alt={card.NAME}
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="280"%3E%3Crect fill="%23f0f0f0" width="200" height="280"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-family="sans-serif"%3ENo Image%3C/text%3E%3C/svg%3E';
          }}
        />
        {/* {card.KING === '1' && <span className="king-indicator">👑</span>} */}
      </div>
      <div className="card-item-info">
        <h3 className="card-item-name">{card.NAME}</h3>
        <div className="card-item-meta">
          <span className={`rarity-badge rarity-${card.RARE}`}>{card.RARE}</span>
          {/* <span className="power-badge">P: {card.POWER}</span> */}
          {card.COLOR_1 && (
            <div className="card-item-colors">
              <span className={`color-tag color-${card.COLOR_1}`}>{card.COLOR_1}</span>
              {card.COLOR_2 && (
                <span className={`color-tag color-${card.COLOR_2}`}>{card.COLOR_2}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
