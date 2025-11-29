/**
 * Image Configuration
 * 画像パスと推奨サイズの設定
 */

const imageConfig = {
  // ロゴ画像
  // 推奨サイズ: 200x60px (横長)
  logo: '/assets/images/logo.png',

  // メインビジュアル（ヒーローセクション）
  // 推奨サイズ: 1920x800px (フルワイド、16:9比率推奨)
  // 朝靄の森、スカンジナビア風の山と森林風景
  heroImage: '/assets/images/hero-forest.png',

  // 世界観紹介セクション - 左側イラスト
  // 推奨サイズ: 600x600px (正方形、または4:3)
  // 森の村、木製アイテム、動物キャラクターなど
  introImage: '/assets/images/intro-scene.png',

  // 背景用のテクスチャ（オプション）
  // 推奨サイズ: 1920x1080px (タイル可能なパターン)
  backgroundTexture: '/assets/images/texture-wood.png',
};

export default imageConfig;
