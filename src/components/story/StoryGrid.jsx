import React from 'react';
import StoryCard from './StoryCard';
import './StoryGrid.css';

const StoryGrid = ({ stories, onStoryClick }) => {
  return (
    <div className="story-grid">
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          story={story}
          onClick={onStoryClick}
        />
      ))}
    </div>
  );
};

export default StoryGrid;
