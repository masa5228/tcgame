import React from 'react';
import CardItem from './CardItem';
import './CardGrid.css';

const CardGrid = ({ cards, onCardClick }) => {
  if (cards.length === 0) {
    return (
      <div className="card-grid-empty">
        <p>該当するカードが見つかりませんでした。</p>
        <p>フィルター条件を変更してください。</p>
      </div>
    );
  }

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <CardItem key={`${card.NAME}-${index}`} card={card} onClick={onCardClick} />
      ))}
    </div>
  );
};

export default CardGrid;
