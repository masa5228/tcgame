import React, { useEffect } from 'react';
import './StoryModal.css';

const StoryModal = ({ story, onClose, onPrevious, onNext, hasPrevious, hasNext }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleArrowKeys = (e) => {
      if (e.key === 'ArrowLeft' && hasPrevious) {
        onPrevious();
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNext();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleArrowKeys);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleArrowKeys);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrevious, onNext, hasPrevious, hasNext]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="story-modal-backdrop" onClick={handleBackdropClick}>
      <div className="story-modal-content">
        <button className="story-modal-close" onClick={onClose}>
          ×
        </button>

        <div className="story-modal-body">
          <div className="story-modal-illustration">
            {story.illustration ? (
              <img src={story.illustration} alt={story.title} />
            ) : (
              <div className="story-illustration-placeholder">
                <span>🎨</span>
                <p>挿絵エリア</p>
              </div>
            )}
          </div>

          <div className="story-modal-text">
            <h2 className="story-modal-title">{story.title}</h2>
            {story.tags && (
              <div className="story-modal-tags">
                {story.tags.map((tag, index) => (
                  <span key={index} className="story-modal-tag">{tag}</span>
                ))}
              </div>
            )}
            <div className="story-modal-content-text">
              {story.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            {story.author && (
              <div className="story-modal-author">
                <span>著者: {story.author}</span>
              </div>
            )}
          </div>
        </div>

        <div className="story-modal-navigation">
          <button
            className="story-nav-button story-nav-prev"
            onClick={onPrevious}
            disabled={!hasPrevious}
          >
            ← 前の話
          </button>
          <button
            className="story-nav-button story-nav-next"
            onClick={onNext}
            disabled={!hasNext}
          >
            次の話 →
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;
