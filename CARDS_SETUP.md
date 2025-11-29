# カード一覧ページ セットアップガイド

## 概要

カード一覧ページは、`cards.csv`から動的にカードデータを読み込み、フィルタリング、ページネーション、詳細表示機能を提供します。

## 必要なファイルの配置

### 1. cards.csv の配置

`cards.csv`ファイルを`public/`ディレクトリにコピーしてください。

```bash
# Windowsの場合（コマンドプロンプト）
copy ..\cards.csv public\cards.csv

# PowerShellの場合
Copy-Item ..\cards.csv public\cards.csv
```

### 2. カード画像の配置

`cards_output`ディレクトリを`public/`ディレクトリにコピーしてください。

```bash
# Windowsの場合（コマンドプロンプト）
xcopy /E /I ..\cards_output public\cards_output

# PowerShellの場合
Copy-Item -Recurse ..\cards_output public\cards_output
```

完成後のディレクトリ構造：
```
web/
├── public/
│   ├── cards.csv              # カードデータCSV
│   ├── cards_output/          # カード画像ディレクトリ
│   │   ├── 柴犬.png
│   │   ├── 少女.png
│   │   └── ...
│   └── assets/
│       └── images/
└── src/
    └── ...
```

## 機能説明

### カード一覧ページ（CardsPage）

- **URL**: `#cards` または `#world`
- **表示件数**: 1ページあたり20枚
- **総カード数**: cards.csvから自動読み込み（約200枚）

### フィルタリング機能

1. **カード名検索**: テキスト入力でカード名を部分一致検索
2. **レアリティフィルタ**: スターター、ノーマル、レア、ゴールド、レジェンド
3. **カラーフィルタ**: 赤、青、紫、緑、黄、白
4. **パワーフィルタ**: 1〜15のパワー値

### ページネーション

- 20枚ずつ表示
- ページ番号をクリックして移動
- 「前へ」「次へ」ボタンで移動
- 多ページの場合は省略表示（...）

### カード詳細モーダル

カードをクリックすると詳細情報を表示：
- カード画像
- カード名
- レアリティ
- パワー値
- カラー情報
- ステータス（BREAK、TEMPO、CHARGE、MACHO）

## ナビゲーション

### トップページから遷移

IntroSectionの「世界観をもっと知る」ボタンをクリック：
```jsx
<a href="#world" className="intro-link secondary">
  世界観をもっと知る
</a>
```

### ヘッダーのナビゲーション

Headerコンポーネントの「Cards」または「World」をクリック：
```jsx
<a href="#cards">Cards</a>
<a href="#world">World</a>
```

## トラブルシューティング

### カードが表示されない

1. `public/cards.csv`が存在するか確認
2. CSVファイルのエンコーディングがUTF-8-BOMであることを確認
3. ブラウザのコンソールでエラーを確認

### カード画像が表示されない

1. `public/cards_output/`ディレクトリが存在するか確認
2. 画像ファイル名がカード名と一致しているか確認（例: `柴犬.png`）
3. 画像ファイルがPNG形式であることを確認

### フィルタが動作しない

1. CSVのカラム名が正しいか確認（RARE, COLOR_1, COLOR_2, POWER）
2. データの形式が正しいか確認

## カスタマイズ

### 表示件数の変更

`src/components/CardsPage.jsx`の`cardsPerPage`を変更：
```javascript
const cardsPerPage = 20; // ここを変更（例: 30）
```

### フィルタ項目の追加

1. `src/utils/csvParser.js`の`filterCards`関数に条件を追加
2. `src/components/CardFilter.jsx`にフィルタUIを追加

### スタイルの変更

各コンポーネントのCSSファイルを編集：
- `CardsPage.css` - ページ全体のスタイル
- `CardFilter.css` - フィルタ部分
- `CardGrid.css` - グリッド表示
- `CardItem.css` - 個別カード
- `CardDetailModal.css` - 詳細モーダル

## コンポーネント構成

```
CardsPage (メインページ)
├── CardFilter (フィルタUI)
├── CardGrid (カード一覧グリッド)
│   └── CardItem × N (個別カード)
├── Pagination (ページネーション)
└── CardDetailModal (詳細モーダル)
```

## データフロー

```
cards.csv (CSVファイル)
    ↓
parseCSV() (パース処理)
    ↓
allCards (全カードデータ)
    ↓
filterCards() (フィルタリング)
    ↓
filteredCards (フィルタ済みカード)
    ↓
slice() (ページ分割)
    ↓
displayCards (表示カード 20枚)
    ↓
CardGrid (グリッド表示)
```

## 開発メモ

- CSVファイルは変更される可能性があるため、ハードコーディングせずに動的読み込み
- 画像が見つからない場合はプレースホルダーを表示
- レスポンシブデザイン対応（モバイル、タブレット、デスクトップ）
- アクセシビリティ対応（キーボード操作、適切なラベル）
