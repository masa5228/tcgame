import React from 'react';
import './HighlightBox.css';

const HighlightBox = ({ type = 'info', title, children }) => {
  return (
    <div className={`highlight-box highlight-${type}`}>
      {title && <h4 className="highlight-title">{title}</h4>}
      <div className="highlight-content">
        {children}
      </div>
    </div>
  );
};

export default HighlightBox;
