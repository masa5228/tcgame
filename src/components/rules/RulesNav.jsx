import React, { useState, useEffect } from 'react';
import './RulesNav.css';

const RulesNav = ({ sections, isCollapsed, onToggle }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ナビゲーションのsticky判定
      setIsSticky(window.scrollY > 100);

      // アクティブセクションの検出
      const sectionElements = sections.map(section =>
        document.getElementById(section.id)
      );

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期実行

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`rules-nav ${isSticky ? 'sticky' : ''} ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="rules-nav-container">
        <div className="rules-nav-header">
          <h3 className="rules-nav-title">{isCollapsed ? '目次' : '目次'}</h3>
          <button
            className="rules-nav-toggle"
            onClick={onToggle}
            aria-label={isCollapsed ? '目次を開く' : '目次を閉じる'}
          >
            {isCollapsed ? '▶' : '◀'}
          </button>
        </div>
        {!isCollapsed && (
          <ul className="rules-nav-list">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={`rules-nav-link ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default RulesNav;
