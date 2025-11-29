import React, { useState, useEffect } from 'react';
import './RulesNav.css';

const RulesNav = ({ sections }) => {
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
    <nav className={`rules-nav ${isSticky ? 'sticky' : ''}`}>
      <div className="rules-nav-container">
        <h3 className="rules-nav-title">目次</h3>
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
      </div>
    </nav>
  );
};

export default RulesNav;
