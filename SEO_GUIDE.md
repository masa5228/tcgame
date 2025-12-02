# T!C!Game (トカゲー) SEO設定ガイド

## 概要

このドキュメントでは、T!C!Gameウェブサイトに実装されたSEO対策について説明します。

## 実装されたSEO対策

### 1. メタタグ最適化

#### 基本メタタグ
- **Title**: ページごとに最適化されたタイトル
- **Description**: 詳細な説明文（120-160文字）
- **Keywords**: ターゲットキーワードを含む

#### 主要キーワード
- トカゲー
- ボードゲーム
- アナログゲーム
- デッキ構築
- スカンジナビア
- TCGame
- TCG（トレーディングカードゲーム）

### 2. Open Graph（OG）タグ

SNSでシェアされた際の表示を最適化:
- `og:type`: website
- `og:title`: ページタイトル
- `og:description`: ページ説明
- `og:image`: OGP画像（1200×630px推奨）
- `og:url`: 正規URL
- `og:locale`: ja_JP
- `og:site_name`: サイト名

### 3. Twitter Cardタグ

Twitterでのシェア表示を最適化:
- `twitter:card`: summary_large_image
- `twitter:title`: ページタイトル
- `twitter:description`: ページ説明
- `twitter:image`: Twitter用画像

### 4. 構造化データ（JSON-LD）

Google検索結果でのリッチスニペット表示に対応:

#### Gameスキーマ
```json
{
  "@type": "Game",
  "name": "T!C!Game (トカゲー)",
  "numberOfPlayers": { "minValue": 2, "maxValue": 4 },
  "playMode": "MultiPlayer",
  "gamePlatform": "Tabletop"
}
```

#### WebSiteスキーマ
- サイト内検索機能の構造化データ
- パンくずリスト対応（今後実装予定）

### 5. robots.txt

```
User-agent: *
Allow: /
Sitemap: https://tcgame.example.com/sitemap.xml
```

### 6. sitemap.xml

主要ページを含むXMLサイトマップ:
- ホームページ（priority: 1.0）
- カード一覧（priority: 0.9）
- ルールページ（priority: 0.8）※コメントアウト中
- ストーリーページ（priority: 0.7）※コメントアウト中

### 7. Canonical URL

重複コンテンツ対策として、各ページに正規URLを設定。

### 8. 言語設定

- `<html lang="ja">`: ページ言語を日本語に設定
- `hreflang="ja"`: 言語代替タグ

### 9. パフォーマンス最適化

- Preconnect: `fonts.googleapis.com`
- DNS Prefetch: 外部リソースの先読み

## SEOコンポーネントの使用方法

### 各ページでのSEO設定

```jsx
import SEO from './SEO';

const YourPage = () => {
  return (
    <>
      <SEO
        title="ページタイトル"
        description="ページの説明文"
        keywords="キーワード1, キーワード2, キーワード3"
        canonical="https://tcgame.example.com/page-url"
        ogImage="https://tcgame.example.com/images/og-image.jpg"
      />
      {/* ページコンテンツ */}
    </>
  );
};
```

### 構造化データの追加

```jsx
import { useEffect } from 'react';
import { getArticleStructuredData, injectStructuredData, removeStructuredData } from '../utils/structuredData';

const StoryPage = ({ story }) => {
  useEffect(() => {
    const data = getArticleStructuredData(story);
    const script = injectStructuredData(data);

    return () => removeStructuredData(script);
  }, [story]);

  // ...
};
```

## OGP画像の推奨仕様

### サイト全体用OG画像
- **ファイル名**: `og-image.jpg`
- **サイズ**: 1200 × 630px
- **配置場所**: `/public/assets/images/og-image.jpg`
- **内容**: ゲームロゴ、キービジュアル、キャッチコピー

### ページ固有OG画像（オプション）
各ページで異なるOG画像を設定可能:
- カード一覧: カードのコラージュ
- ルール: ルールブックのビジュアル
- ストーリー: 各ストーリーの挿絵

## 必要な設定変更

### 本番環境へのデプロイ前

以下のURLを実際のドメインに変更してください:

1. **index.html**
   - `og:url`
   - `og:image`
   - `twitter:url`
   - `twitter:image`
   - Canonical URL

2. **robots.txt**
   - Sitemap URL

3. **sitemap.xml**
   - すべての`<loc>`タグ内のURL

4. **SEO.jsx**
   - 必要に応じてデフォルトドメインを設定

### 検索例
```
https://tcgame.example.com/
↓
https://yourdomain.com/
```

## Google Search Consoleの設定

1. **サイトマップ登録**
   - `https://yourdomain.com/sitemap.xml` を登録

2. **インデックス登録リクエスト**
   - 主要ページのURL検査とインデックス登録

3. **モバイルユーザビリティ確認**
   - レスポンシブデザインの検証

4. **Core Web Vitals確認**
   - ページ速度とユーザー体験の測定

## 継続的なSEO改善

### 定期的な更新
- sitemap.xmlの`<lastmod>`を更新
- 新しいコンテンツ追加時にサイトマップを更新
- メタディスクリプションの最適化

### コンテンツ最適化
- 各ページに適切な見出し構造（H1-H6）を使用
- 画像にalt属性を設定
- 内部リンクの最適化

### パフォーマンス監視
- Google PageSpeed Insightsで定期チェック
- 画像の最適化（WebP形式、遅延読み込み）
- JavaScript/CSSの最小化

## チェックリスト

デプロイ前に以下を確認:

- [ ] すべてのURLを本番ドメインに変更
- [ ] OG画像を作成・配置（1200×630px）
- [ ] Faviconを作成・配置
- [ ] Apple Touch Iconを作成・配置
- [ ] robots.txtのドメインを更新
- [ ] sitemap.xmlのURLを更新
- [ ] Google Search Consoleにサイト登録
- [ ] Google Analyticsの設定（オプション）
- [ ] 各ページのメタタグを確認
- [ ] モバイル表示の確認
- [ ] ページ速度の確認

## ツール

### SEO検証ツール
- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Open Graph Debugger](https://www.opengraph.xyz/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 構造化データ検証
- [Schema.org Validator](https://validator.schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

## 参考資料

- [Google検索セントラル](https://developers.google.com/search/docs)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
