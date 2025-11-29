import React from 'react';
import './StoryCard.css';

const StoryCard = ({ story, onClick }) => {
  return (
    <div className="story-card" onClick={() => onClick(story)}>
      <div className="story-card-image">
        {story.thumbnail ? (
          <img src={story.thumbnail} alt={story.title} />
        ) : (
          <div className="story-card-placeholder">
            <span>📖</span>
          </div>
        )}
      </div>
      <div className="story-card-content">
        <h3 className="story-card-title">{story.title}</h3>
        <p className="story-card-excerpt">{story.excerpt}</p>
        <div className="story-card-meta">
          {story.tags && story.tags.map((tag, index) => (
            <span key={index} className="story-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
