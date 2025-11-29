# T!C!Game (トカゲー) ランディングページ

スカンジナビア風の世界観を持つトレーディングカードゲーム「T!C!Game（トカゲー）」の公式ウェブサイトです。

## プロジェクト構成

```
web/
├── index.html                 # HTMLエントリーポイント
├── package.json               # 依存関係の定義
├── vite.config.js            # Vite設定
└── src/
    ├── main.jsx              # Reactエントリーポイント
    ├── App.jsx               # メインアプリケーション
    ├── App.css               # アプリケーションスタイル
    ├── index.css             # グローバルスタイル
    ├── config/
    │   └── images.js         # 画像パス設定
    └── components/
        ├── Header.jsx        # ヘッダー（ロゴ・ナビゲーション）
        ├── Header.css
        ├── HeroSection.jsx   # メインビジュアル
        ├── HeroSection.css
        ├── IntroSection.jsx  # 世界観紹介
        └── IntroSection.css
```

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 画像の準備

`public/assets/images/` ディレクトリに以下の画像を配置してください：

- **logo.png** - ロゴ画像（推奨サイズ: 200x60px）
- **hero-forest.png** - メインビジュアル（推奨サイズ: 1920x800px）
- **intro-scene.png** - 世界観紹介画像（推奨サイズ: 600x600px）

画像パスを変更する場合は `src/config/images.js` を編集してください。

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 が自動的に開きます。

### 4. プロダクションビルド

```bash
npm run build
```

ビルド結果は `dist/` ディレクトリに出力されます。

### 5. プレビュー

```bash
npm run preview
```

## デザインコンセプト

### スカンジナビア風デザイン

- **シンプルで清潔なレイアウト**: 余白を活かしたミニマルなデザイン
- **ナチュラルカラー**: 森の緑、石のグレー、木のブラウンなど自然な色合い
- **手描き風のタイポグラフィ**: ゲームタイトルに温かみのあるフォントを使用
- **高品質な画像**: スカンジナビアの森や山の風景

### カラーパレット

- **Forest Green**: `#5a7c5a` - メインアクセントカラー
- **Stone Gray**: `#2c3e50` - テキストとヘッダー
- **Mist**: `#ecf0f1` - 背景とアクセント
- **Snow White**: `#ffffff` - ベース背景

## コンポーネント構成

### Header
ロゴとナビゲーションメニュー（Rules / Cards / World）

### HeroSection
メインビジュアルとゲームタイトル、キャッチコピー

### IntroSection
世界観の紹介とCTA（Call to Action）ボタン

## カスタマイズ

### 画像パスの変更

`src/config/images.js` を編集：

```javascript
const imageConfig = {
  logo: '/your/custom/path/logo.png',
  heroImage: '/your/custom/path/hero.png',
  introImage: '/your/custom/path/intro.png',
};
```

### スタイルの変更

グローバルスタイルは `src/index.css` で定義されています。
CSS変数を使用してカラーパレットやスペーシングを簡単に変更できます。

```css
:root {
  --color-forest-green: #5a7c5a;
  --color-stone-gray: #2c3e50;
  /* ... */
}
```

## ライセンス

Copyright (c) 2025 T!C!Game (トカゲー)
