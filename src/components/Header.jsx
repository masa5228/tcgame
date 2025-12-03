import React from 'react';
import imageConfig from '../config/images';
import './Header.css';

const Header = () => {
  const menuItems = [
    { id: 'rules', label: 'Rules' },
    // { id: 'story', label: 'Story' },
    { id: 'world', label: 'Cards' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo">
          <img src={imageConfig.logo} alt="T!C!Game Logo" />
        </a>
        <nav className="nav-menu">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
