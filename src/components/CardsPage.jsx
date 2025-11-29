import React, { useState, useEffect } from 'react';
import CardFilter from './CardFilter';
import CardGrid from './CardGrid';
import Pagination from './Pagination';
import CardDetailModal from './CardDetailModal';
import { parseCSV, getUniqueValues, filterCards, getSkillOptions } from '../utils/csvParser';
import './CardsPage.css';

const CardsPage = () => {
  const [allCards, setAllCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [displayCards, setDisplayCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const [filters, setFilters] = useState({
    search: '',
    rarity: 'all',
    color: 'all',
    power: 'all',
    break: 'all',
    skill: 'all',
    king: 'all',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 20;

  // CSVファイルを読み込む
  useEffect(() => {
    const loadCards = async () => {
      try {
        setLoading(true);
        const response = await fetch('/cards.csv');
        if (!response.ok) {
          throw new Error('CSVファイルの読み込みに失敗しました');
        }
        const csvText = await response.text();
        const cards = parseCSV(csvText);
        setAllCards(cards);
        setFilteredCards(cards);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadCards();
  }, []);

  // フィルタリング処理
  useEffect(() => {
    const filtered = filterCards(allCards, filters);
    setFilteredCards(filtered);
    setCurrentPage(1); // フィルタ変更時はページを1に戻す
  }, [filters, allCards]);

  // ページネーション処理
  useEffect(() => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    setDisplayCards(filteredCards.slice(startIndex, endIndex));

    // ページトップにスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, filteredCards]);

  // フィルタ用のユニーク値を取得
  // const rarities = getUniqueValues(allCards, 'RARE');
  const rarities = ['スターター', 'ノーマル', 'レア', 'ゴールド', 'レジェンド'];
  const colors = getUniqueValues(allCards, 'COLOR_1');
  const powers = getUniqueValues(allCards, 'POWER');
  const breaks = getUniqueValues(allCards, 'BREAK');
  const skills = getSkillOptions();
  const kings = getUniqueValues(allCards, 'KING');

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  if (loading) {
    return (
      <div className="cards-page">
        <div className="cards-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>カードデータを読み込んでいます...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="cards-page">
        <div className="cards-container">
          <div className="error-message">
            <h2>エラーが発生しました</h2>
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cards-page">
      <div className="cards-hero">
        <h1>カード一覧</h1>
        <p>全 {allCards.length} 種類のカードから {filteredCards.length} 件を表示</p>
      </div>

      <div className="cards-container">
        <CardFilter
          filters={filters}
          onFilterChange={setFilters}
          rarities={rarities}
          colors={colors}
          powers={powers}
          breaks={breaks}
          skills={skills}
          kings={kings}
        />

        <CardGrid cards={displayCards} onCardClick={handleCardClick} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {selectedCard && (
        <CardDetailModal card={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CardsPage;
