import React from 'react';
import './CardFilter.css';

const CardFilter = ({ filters, onFilterChange, rarities, colors, powers, breaks, skills, kings }) => {
  const handleSearchChange = (e) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handleRarityChange = (e) => {
    onFilterChange({ ...filters, rarity: e.target.value });
  };

  const handleColorChange = (e) => {
    onFilterChange({ ...filters, color: e.target.value });
  };

  const handlePowerChange = (e) => {
    onFilterChange({ ...filters, power: e.target.value });
  };

  const handleBreakChange = (e) => {
    onFilterChange({ ...filters, break: e.target.value });
  };

  const handleSkillChange = (e) => {
    onFilterChange({ ...filters, skill: e.target.value });
  };

  const handleKingChange = (e) => {
    onFilterChange({ ...filters, king: e.target.value });
  };

  const handleReset = () => {
    onFilterChange({
      search: '',
      rarity: 'all',
      color: 'all',
      power: 'all',
      break: 'all',
      skill: 'all',
      king: 'all',
    });
  };

  return (
    <div className="card-filter">
      <div className="filter-header">
        <h3>フィルター</h3>
        <button className="filter-reset" onClick={handleReset}>
          リセット
        </button>
      </div>

      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="search">カード名検索</label>
          <input
            type="text"
            id="search"
            placeholder="カード名を入力..."
            value={filters.search}
            onChange={handleSearchChange}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="rarity">レアリティ</label>
          <select
            id="rarity"
            value={filters.rarity}
            onChange={handleRarityChange}
            className="filter-select"
          >
            <option value="all">すべて</option>
            {rarities.map((rarity) => (
              <option key={rarity} value={rarity}>
                {rarity}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="color">カラー</label>
          <select
            id="color"
            value={filters.color}
            onChange={handleColorChange}
            className="filter-select"
          >
            <option value="all">すべて</option>
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="power">パワー</label>
          <select
            id="power"
            value={filters.power}
            onChange={handlePowerChange}
            className="filter-select"
          >
            <option value="all">すべて</option>
            {powers.map((power) => (
              <option key={power} value={power}>
                {power}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="break">BREAK</label>
          <select
            id="break"
            value={filters.break}
            onChange={handleBreakChange}
            className="filter-select"
          >
            <option value="all">すべて</option>
            {breaks.map((breakValue) => (
              <option key={breakValue} value={breakValue}>
                {breakValue}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="skill">スキル</label>
          <select
            id="skill"
            value={filters.skill}
            onChange={handleSkillChange}
            className="filter-select"
          >
            <option value="all">すべて</option>
            {skills.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="king">キング</label>
          <select
            id="king"
            value={filters.king}
            onChange={handleKingChange}
            className="filter-select"
          >
            <option value="all">すべて</option>
            {kings.map((king) => (
              <option key={king} value={king}>
                {king === '0' ? '通常' : king === '1' ? 'キング' : king}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CardFilter;
