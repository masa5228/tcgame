/**
 * CSV Parser Utility
 * cards.csvを読み込んでパースする
 */

export const parseCSV = (csvText) => {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',').map(h => h.trim().replace(/^\ufeff/, '')); // BOM除去

  const cards = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const values = line.split(',');
    const card = {};

    headers.forEach((header, index) => {
      card[header] = values[index] ? values[index].trim() : '';
    });

    // カード名が存在する行のみ追加
    if (card.NAME) {
      cards.push(card);
    }
  }

  return cards;
};

/**
 * カードデータからユニークな値を抽出する
 */
export const getUniqueValues = (cards, field) => {
  const values = new Set();
  cards.forEach(card => {
    if (card[field]) {
      values.add(card[field]);
    }
  });
  return Array.from(values).sort();
};

/**
 * スキルリストを取得（TEMPO、CHARGE、MACHO）
 */
export const getSkillOptions = () => {
  return ['TEMPO', 'CHARGE', 'MACHO'];
};

/**
 * カードをフィルタリングする
 */
export const filterCards = (cards, filters) => {
  return cards.filter(card => {
    // レアリティフィルタ
    if (filters.rarity && filters.rarity !== 'all' && card.RARE !== filters.rarity) {
      return false;
    }

    // カラーフィルタ
    if (filters.color && filters.color !== 'all' &&
        card.COLOR_1 !== filters.color && card.COLOR_2 !== filters.color) {
      return false;
    }

    // パワーフィルタ
    if (filters.power && filters.power !== 'all' && card.POWER !== filters.power) {
      return false;
    }

    // BREAKフィルタ
    if (filters.break && filters.break !== 'all' && card.BREAK !== filters.break) {
      return false;
    }

    // スキルフィルタ（TEMPO、CHARGE、MACHO）
    if (filters.skill && filters.skill !== 'all') {
      if (card[filters.skill] !== '1') {
        return false;
      }
    }

    // キングフィルタ
    if (filters.king && filters.king !== 'all' && card.KING !== filters.king) {
      return false;
    }

    // 検索フィルタ（カード名）
    if (filters.search && !card.NAME.includes(filters.search)) {
      return false;
    }

    return true;
  });
};

/**
 * カード画像のパスを取得
 */
export const getCardImagePath = (cardName) => {
  return `/cards_output/${cardName}.png`;
};
