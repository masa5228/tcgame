import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import CardsPage from './components/CardsPage';
import RulesPage from './components/RulesPage';
import StoryPage from './components/StoryPage';
import HistoryPage from './components/HistoryPage';
import ContactModal from './components/ContactModal';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactSubmit = async (formData) => {
    const res = await fetch("https://line-worker.masa5228.workers.dev/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name:formData.name,
        message:formData.message
      })
    });
    if (!res.ok) {
      throw new Error("Worker送信に失敗しました");
    }
    console.log('送信されたデータ:', formData);

    // formData には { name: string, message: string } が含まれます
    // 送信処理が完了したらモーダルを閉じる
    setIsContactModalOpen(false);
  };

  useEffect(() => {
    // URLハッシュに基づいてページを変更
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // # を除去
      if (hash === 'cards' || hash === 'world') {
        setCurrentPage('cards');
      } else if (hash === 'rules') {
        setCurrentPage('rules');
      } else if (hash === 'story') {
        setCurrentPage('story');
      } else if (hash.startsWith('history/')) {
        setCurrentPage('history');
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
      case 'rules':
        return <RulesPage />;
      case 'story':
        return <StoryPage />;
      case 'history':
        return <HistoryPage />;
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
        <button
          className="contact-button"
          onClick={() => setIsContactModalOpen(true)}
        >
          開発者へメッセージ
        </button>
        <p>&copy; 2025 T!C!Game (トカゲー). All rights reserved.</p>
      </footer>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onSubmit={handleContactSubmit}
      />
    </div>
  );
}

export default App;
