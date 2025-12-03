import React from 'react';
import imageConfig from '../config/images';
import './IntroSection.css';

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-image">
          <img src={imageConfig.introImage} alt="森の村の風景" />
        </div>
        <div className="intro-text">
          <h2>ようこそ、不思議な森の世界へ</h2>
          <div className="intro-description">
            <p>
              この世界には、勇者がいて、ドラゴンが空を飛んでいます。
              <br />
              筋肉が大好きなプロレスラーや忙しいサラリーマンもいます。
              <br />
              ちょっと間の抜けた生き物たちが、
              <br />
              朝靄に包まれた森の中で暮らしています。
            </p>
            <p>
              彼らはみんな、どこか愛らしく、
              <br />
              どこかおかしな仲間たち。
              <br />
              あなたもこの世界の一員となって、
              <br />
              愉快な冒険を楽しんでみませんか？
            </p>
          </div>
          <div className="intro-links">
            <a href="#rules" className="intro-link primary">
              ルールを見る
            </a>
            {/* <a href="#story" className="intro-link secondary">
              世界を知る
            </a> */}
            <a href="#world" className="intro-link secondary">
              住人たちを知る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
