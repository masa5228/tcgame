// 構造化データ (JSON-LD) の生成ユーティリティ

/**
 * ゲーム製品の構造化データ
 */
export const getGameStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Game',
  name: 'T!C!Game (トカゲー)',
  alternateName: 'TCGame',
  description: '北欧スカンジナビアの世界観を持つデッキ構築型アナログゲーム。カードを集めてコンボを駆使し、キングマッチで勝利を目指すトレーディングカードゲーム。',
  url: 'https://tcgame.example.com/',
  image: 'https://tcgame.example.com/assets/images/og-image.jpg',
  gameItem: 'Card Game',
  numberOfPlayers: {
    '@type': 'QuantitativeValue',
    minValue: 2,
    maxValue: 4,
  },
  playMode: 'MultiPlayer',
  gamePlatform: 'Tabletop',
  keywords: 'トカゲー, ボードゲーム, アナログゲーム, デッキ構築, スカンジナビア, TCG',
  inLanguage: 'ja',
  publisher: {
    '@type': 'Organization',
    name: 'T!C!Game 制作チーム',
  },
});

/**
 * パンくずリストの構造化データ
 */
export const getBreadcrumbStructuredData = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

/**
 * FAQページの構造化データ
 */
export const getFAQStructuredData = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

/**
 * 記事/ストーリーの構造化データ
 */
export const getArticleStructuredData = (story) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: story.title,
  description: story.excerpt,
  author: {
    '@type': 'Organization',
    name: story.author || 'T!C!Game 制作チーム',
  },
  publisher: {
    '@type': 'Organization',
    name: 'T!C!Game 制作チーム',
  },
  datePublished: story.publishDate || '2025-01-15',
  dateModified: story.modifiedDate || '2025-01-15',
  image: story.illustration || story.thumbnail,
  inLanguage: 'ja',
  keywords: story.tags ? story.tags.join(', ') : '',
});

/**
 * WebSiteの構造化データ
 */
export const getWebSiteStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'T!C!Game (トカゲー)',
  url: 'https://tcgame.example.com/',
  description: '北欧スカンジナビアの世界観を持つデッキ構築型アナログゲーム',
  inLanguage: 'ja',
  publisher: {
    '@type': 'Organization',
    name: 'T!C!Game 制作チーム',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://tcgame.example.com/#cards?search={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
});

/**
 * 構造化データをHTMLに挿入
 */
export const injectStructuredData = (data) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
  return script;
};

/**
 * 構造化データを削除
 */
export const removeStructuredData = (script) => {
  if (script && script.parentNode) {
    script.parentNode.removeChild(script);
  }
};
