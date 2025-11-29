import React, { useState } from 'react';
import StoryGrid from './story/StoryGrid';
import StoryModal from './story/StoryModal';
import { stories, getStoryIndex } from '../data/stories';
import './StoryPage.css';

const StoryPage = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const handleCloseModal = () => {
    setSelectedStory(null);
  };

  const handlePrevious = () => {
    if (!selectedStory) return;
    const currentIndex = getStoryIndex(selectedStory.id);
    if (currentIndex > 0) {
      setSelectedStory(stories[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (!selectedStory) return;
    const currentIndex = getStoryIndex(selectedStory.id);
    if (currentIndex < stories.length - 1) {
      setSelectedStory(stories[currentIndex + 1]);
    }
  };

  const getCurrentIndex = () => {
    return selectedStory ? getStoryIndex(selectedStory.id) : -1;
  };

  return (
    <div className="story-page">
      {/* ヒーローセクション */}
      <div className="story-hero">
        <div className="story-hero-content">
          <h1>物語の世界</h1>
          <p>T!C!Gameの世界を彩る物語</p>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="story-container">
        <div className="story-intro">
          <h2>この世界の小さな冒険譚について</h2>
          <p>
            T!C!Gameに登場するキャラクターたちの冒険譚を、短編形式でお届けします。
            各ストーリーは独立していますが、読み進めることでこの世界の全体像が見えてくるかもしれません。
          </p>
          <p>
            新しい物語は随時追加していきますので、お楽しみに。
          </p>
        </div>

        <div className="story-stats">
          <div className="story-stat-item">
            <div className="story-stat-number">{stories.length}</div>
            <div className="story-stat-label">公開中の物語</div>
          </div>
          <div className="story-stat-item">
            <div className="story-stat-number">∞</div>
            <div className="story-stat-label">これから生まれる物語</div>
          </div>
        </div>

        <StoryGrid stories={stories} onStoryClick={handleStoryClick} />
      </div>

      {/* ストーリーモーダル */}
      {selectedStory && (
        <StoryModal
          story={selectedStory}
          onClose={handleCloseModal}
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={getCurrentIndex() > 0}
          hasNext={getCurrentIndex() < stories.length - 1}
        />
      )}
    </div>
  );
};

export default StoryPage;
