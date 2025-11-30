import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import CardsPage from './components/CardsPage';
import RulesPage from './components/RulesPage';
import StoryPage from './components/StoryPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // URLハッシュに基づいてページを変更
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // # を除去
      if (hash === 'cards' || hash === 'world') {
        setCurrentPage('cards');
      // } else if (hash === 'rules') {
      //   setCurrentPage('rules');
      // } else if (hash === 'story') {
      //   setCurrentPage('story');
      } else {
        setCurrentPage('home');
      }
    };

    // 初回マウント時とハッシュ変更時にページを更新
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'cards':
        return <CardsPage />;
      // case 'rules':
      //   return <RulesPage />;
      // case 'story':
      //   return <StoryPage />;
      case 'home':
      default:
        return (
          <>
            <HeroSection />
            <IntroSection />
          </>
        );
    }
  };

  return (
    <div className="app">
      <Header />
      <main>{renderContent()}</main>
      <footer className="footer">
        <p>&copy; 2025 T!C!Game (トカゲー). All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
