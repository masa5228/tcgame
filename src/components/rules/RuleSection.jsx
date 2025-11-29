import React from 'react';
import './RuleSection.css';

const RuleSection = ({ id, title, children, hasImage = false, imagePlaceholder = false }) => {
  return (
    <section id={id} className="rule-section">
      <div className="rule-section-container">
        <h2 className="rule-section-title">{title}</h2>
        <div className={`rule-section-content ${hasImage ? 'with-image' : ''}`}>
          <div className="rule-section-text">
            {children}
          </div>
          {imagePlaceholder && (
            <div className="rule-section-image">
              <div className="image-placeholder">
                <span>画像エリア</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RuleSection;
