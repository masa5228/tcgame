import React from 'react';
import './RuleSection.css';

const RuleSection = ({
  id,
  title,
  children,
  hasImage = false,
  imagePlaceholder = false,
  imageUrl = null,
  imageAlt = ''
}) => {
  return (
    <section id={id} className="rule-section">
      <div className="rule-section-container">
        <h2 className="rule-section-title">{title}</h2>
        <div className={`rule-section-content ${hasImage ? 'with-image' : ''}`}>
          <div className="rule-section-text">
            {children}
          </div>
          {(imagePlaceholder || imageUrl) && (
            <div className="rule-section-image">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={imageAlt || title}
                  className="rule-image"
                />
              ) : (
                <div className="image-placeholder">
                  <span>画像エリア</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RuleSection;
