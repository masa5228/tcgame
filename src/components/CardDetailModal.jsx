import React from 'react';
import { getCardImagePath } from '../utils/csvParser';
import flavorTexts from '../data/flavorTexts.json';
import './CardDetailModal.css';

const CardDetailModal = ({ card, onClose }) => {
  if (!card) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // スキルがあるかチェック
  const hasSkills = card.TEMPO === '1' || card.CHARGE === '1' || card.MACHO === '1';

  // フレーバーテキストがあるかチェック
  const flavorText = flavorTexts[card.NAME];
  const hasFlavorText = flavorText && flavorText.trim() !== '';

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          <div className="modal-image">
            <img src={getCardImagePath(card.NAME)} alt={card.NAME} />
          </div>
          <div className="modal-details">
            <h2 className="card-detail-name">{card.NAME}</h2>

            {/* フレーバーテキスト - テキストがある場合のみ表示 */}
            {hasFlavorText && (
              <div className="flavor-text-section flavor-text-top">
                <div className="flavor-text">
                  {flavorText}
                </div>
              </div>
            )}

            <div className="card-detail-info">
              <div className="info-item">
                <span className="info-label">レアリティ:</span>
                <span className="info-value">{card.RARE}</span>
              </div>
              <div className="info-item">
                <span className="info-label">パワー:</span>
                <span className="info-value">{card.POWER}</span>
              </div>
              <div className="info-item">
                <span className="info-label">ブレイク:</span>
                <span className="info-value">{card.BREAK}</span>
              </div>
              {card.COLOR_1 && (
                <div className="info-item">
                  <span className="info-label">カラー1:</span>
                  <span className="info-value">{card.COLOR_1}</span>
                </div>
              )}
              {card.COLOR_2 && (
                <div className="info-item">
                  <span className="info-label">カラー2:</span>
                  <span className="info-value">{card.COLOR_2}</span>
                </div>
              )}
              {card.KING === '1' && (
                <div className="info-item">
                  <span className="info-label">タイプ:</span>
                  <span className="info-value king-badge">キングカード</span>
                </div>
              )}
            </div>

            {/* スキル - スキルがある場合のみ表示 */}
            {hasSkills && (
              <div className="card-stats">
                <h3>スキル</h3>
                <div className="skills-list">
                  {card.TEMPO === '1' && (
                    <div className="skill-item">
                      <div className="skill-name">Tempo</div>
                      <div className="skill-description">手札を1枚山札の一番下に置き、カードを一枚引く</div>
                    </div>
                  )}
                  {card.CHARGE === '1' && (
                    <div className="skill-item">
                      <div className="skill-name">Charge</div>
                      <div className="skill-description">捨て札のカードを1枚手札に加える</div>
                    </div>
                  )}
                  {card.MACHO === '1' && (
                    <div className="skill-item">
                      <div className="skill-name">Macho</div>
                      <div className="skill-description">このターンのパワー合計値＋３</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailModal;
