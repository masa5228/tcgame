import React, { useEffect, useState } from 'react';
import historyFragments from '../data/historyFragments.json';
import './HistoryPage.css';

const HistoryPage = () => {
  const [fragmentId, setFragmentId] = useState(null);
  const [fragment, setFragment] = useState(null);

  useEffect(() => {
    // URLハッシュから年号を取得 (#history/-76 → -76)
    const getFragmentIdFromHash = () => {
      const hash = window.location.hash; // 例: #history/-76
      const match = hash.match(/#history\/(.+)/);
      return match ? match[1] : null;
    };

    const updateFragment = () => {
      const id = getFragmentIdFromHash();
      setFragmentId(id);

      if (id && historyFragments[id]) {
        setFragment(historyFragments[id]);
      } else {
        setFragment(null);
      }
    };

    // 初回実行
    updateFragment();

    // ハッシュ変更を監視
    window.addEventListener('hashchange', updateFragment);

    return () => {
      window.removeEventListener('hashchange', updateFragment);
    };
  }, []);

  if (!fragment) {
    return (
      <div className="history-page">
        <div className="history-container">
          <div className="fragment-not-found">
            <h2>???</h2>
            <p>この断片は見つかりませんでした。</p>
            <p className="hint">もしかしたら、どこかに隠されているかもしれません...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="history-page">
      <div className="history-container">
        <div className="fragment-header">
          <p className="fragment-year">国歴 {fragment.year}</p>
        </div>
        <hr className="fragment-divider" />
        <h1 className="fragment-title">{fragment.title}</h1>
        <div className="fragment-content">
          {fragment.content.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <hr className="fragment-divider" />
        <p className="fragment-footer">断片 {fragmentId}</p>
      </div>
    </div>
  );
};

export default HistoryPage;
