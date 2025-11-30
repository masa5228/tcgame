import React from 'react';
import RuleSection from './rules/RuleSection';
import InfoCard from './rules/InfoCard';
import TableSection from './rules/TableSection';
import HighlightBox from './rules/HighlightBox';
import RulesNav from './rules/RulesNav';
import './RulesPage.css';

const RulesPage = () => {
  const sections = [
    { id: 'introduction', title: 'はじめに' },
    { id: 'basic-info', title: 'ゲームの基本情報' },
    { id: 'components', title: 'コンポーネント' },
    { id: 'card-status', title: 'カードのステータス' },
    { id: 'preparation', title: 'ゲームの準備' },
    { id: 'round-flow', title: 'ラウンドの流れ' },
    { id: 'battle-rules', title: '対戦ルール' },
    { id: 'combo', title: 'コンボ' },
    { id: 'chips', title: 'チップ' },
    { id: 'rewards', title: '対戦報酬' },
    { id: 'shop', title: 'ショップ' },
    { id: 'king-match', title: 'キングマッチ' },
    { id: 'summary', title: 'まとめ' },
  ];

  const rewardTableHeaders = ['デッキ枚数', '勝利時', '敗北時'];
  const rewardTableRows = [
    ['9枚デッキ', 'チップ9枚', 'チップ5枚'],
    ['10枚デッキ', 'チップ11枚', 'チップ7枚'],
    ['11枚デッキ', 'チップ15枚', 'チップ8枚'],
    ['12枚デッキ', 'チップ19枚', 'チップ10枚'],
    ['13枚デッキ', 'チップ23枚', 'チップ14枚'],
    ['14枚デッキ', 'チップ27枚', 'チップ18枚'],
    ['15枚デッキ', 'チップ30枚', 'チップ20枚'],
  ];

  const shopTableHeaders = ['レアリティ', 'コスト', 'パワー範囲', '内容'];
  const shopTableRows = [
    ['ノーマル', 'チップ0枚', '1～7', '65枚／キング6枚'],
    ['レア', 'チップ4枚', '5～10', '50枚／キング6枚'],
    ['ゴールド', 'チップ14枚', '7～12', '39枚／キング6枚'],
    ['レジェンド', 'チップ35枚', '11～15', '16枚／キング6枚'],
  ];

  return (
    <div className="rules-page">
      {/* ヒーローセクション */}
      <div className="rules-hero">
        <div className="rules-hero-content">
          <h1>ルールブック</h1>
          <p>T!C!Game（トカゲー）の遊び方を詳しく解説します</p>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="rules-main">
        <div className="rules-content-wrapper">
          {/* サイドナビゲーション */}
          <aside className="rules-sidebar">
            <RulesNav sections={sections} />
          </aside>

          {/* メインコンテンツ */}
          <main className="rules-content">
            {/* はじめに */}
            <RuleSection id="introduction" title="はじめに" imagePlaceholder>
              <p>
                T!C!Game（トカゲー）は、カードを集め、デッキを構築し、コンボを駆使して戦うカードゲームです。
                プレイヤーはトレードやショップでカードを手に入れ、強力なデッキを作りながら対戦を繰り返します。
              </p>
              <p>
                最終的にキングマッチに勝利したプレイヤーがゲームの覇者となります。
                基本のカジュアルルールと上級者向けのアドバンスルールの2種類があります。
              </p>
            </RuleSection>

            {/* ゲームの基本情報 */}
            <RuleSection id="basic-info" title="ゲームの基本情報">
              <div className="info-cards-grid">
                <InfoCard
                  icon="👥"
                  title="プレイ人数"
                  items={['2～4人']}
                />
                <InfoCard
                  icon="⏱️"
                  title="プレイ時間"
                  items={['30～90分', '※人数や展開により変動']}
                />
                <InfoCard
                  icon="🎯"
                  title="ジャンル"
                  items={['カードゲーム', 'デッキ構築']}
                />
                <InfoCard
                  icon="👑"
                  title="勝利条件"
                  items={['キングマッチに勝利すること']}
                />
              </div>
            </RuleSection>

            {/* コンポーネント */}
            <RuleSection id="components" title="コンポーネント" imagePlaceholder>
              <ul>
                <li>キングトークン：13枚</li>
                <li>スターターカード：36枚</li>
                <li>ノーマルカード：65枚</li>
                <li>レアカード：50枚</li>
                <li>ゴールドカード：39枚</li>
                <li>レジェンドカード：16枚</li>
              </ul>
            </RuleSection>

            {/* カードのステータス */}
            <RuleSection id="card-status" title="カードのステータス" hasImage imagePlaceholder>
              <p>各カードは以下の要素を持ちます。</p>
              <ul>
                <li><strong>レアリティ：</strong>スターター、ノーマル、レア、ゴールド、レジェンド</li>
                <li><strong>パワー：</strong>1～15の数値</li>
                <li><strong>色：</strong>赤・青・緑・黄・紫の中から最大2色、または無色</li>
                <li><strong>ブレイク：</strong>1～4の数値</li>
                <li><strong>数字コンボ：</strong>つながるパワーを示すアイコン（0～7個）</li>
                <li><strong>スキル：</strong>3種類のスキル（Macho, Tempo, Charge）</li>
              </ul>
            </RuleSection>

            {/* ゲームの準備 */}
            <RuleSection id="preparation" title="ゲームの準備" imagePlaceholder>
              <ol>
                <li>各プレイヤーはスターターカード6枚で構成された初期デッキを1つ選びます。</li>
                <li>各プレイヤーはさらにノーマルカードを3枚受け取ります。</li>
                <li>初期チップは0枚です。</li>
                <li>プレイヤー人数×3+1枚のキングトークンをサプライに用意します。</li>
              </ol>

              <HighlightBox type="info" title="初期デッキ構成">
                <p><strong>全デッキ共通：</strong>柴犬、少女、ネズミの子、わんぱく坊主</p>
                <ul>
                  <li><strong>マッスルデッキ：</strong>ボディビルダー、レスラー</li>
                  <li><strong>家族デッキ：</strong>お母さん、お父さん</li>
                  <li><strong>ネズミデッキ：</strong>ネズミママ、ネズミパパ</li>
                  <li><strong>騎士デッキ：</strong>先輩騎士、うっかり騎士</li>
                  <li><strong>黒魔術デッキ：</strong>怪しい古本、真っ黒な石</li>
                  <li><strong>犬デッキ：</strong>シュナウザー、コーギー</li>
                </ul>
              </HighlightBox>
            </RuleSection>

            {/* ラウンドの流れ */}
            <RuleSection id="round-flow" title="ラウンドの流れ" imagePlaceholder>
              <div className="flow-steps">
                <div className="flow-step">
                  <div className="flow-step-number">1</div>
                  <div className="flow-step-content">
                    <h4>デッキ構築</h4>
                    <p>デッキは9枚以上で任意の枚数にできます。</p>
                    <p>デッキに入れられるカードは「デッキ枚数以下のパワーを持つもの」のみです。</p>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="flow-step-number">2</div>
                  <div className="flow-step-content">
                    <h4>対戦相手を決定</h4>
                    <p>任意のプレイヤーを選び1対1で対戦します。</p>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="flow-step-number">3</div>
                  <div className="flow-step-content">
                    <h4>対戦を行う</h4>
                    <p>対戦ルールに従って1対1で勝負します。</p>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="flow-step-number">4</div>
                  <div className="flow-step-content">
                    <h4>報酬</h4>
                    <p>勝敗に応じてチップを得ます。</p>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="flow-step-number">5</div>
                  <div className="flow-step-content">
                    <h4>お買い物</h4>
                    <p>各プレイヤーは最大3枚までカードを購入できます。</p>
                    <p>購入時にキングカードを引いた場合、キングトークンを1枚獲得します。</p>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="flow-step-number">6</div>
                  <div className="flow-step-content">
                    <h4>ラウンド終了</h4>
                    <p>サプライのキングトークンがすべてなくなったらキングマッチへ。</p>
                    <p>条件を満たしていない場合は次のラウンドへ進みます。</p>
                  </div>
                </div>
              </div>
            </RuleSection>

            {/* 対戦ルール */}
            <RuleSection id="battle-rules" title="対戦ルール" hasImage imagePlaceholder>
              <HighlightBox type="important" title="勝利条件">
                <p>先に自分のデッキが0枚になったプレイヤーが勝利します。</p>
              </HighlightBox>

              <h3>ターンの流れ</h3>
              <ol>
                <li>手札が3枚になるようにデッキからカードを引きます。</li>
                <li>先手プレイヤーから順にコンボの規則に従ってカードを出します。
                  出せない場合はパスします。</li>
                <li>両者が出せなくなった時点でターンの勝敗判定を行います。</li>
              </ol>

              <h3>ターンの勝敗判定</h3>
              <ol>
                <li>コンボ数が多いプレイヤーが勝利します。</li>
                <li>コンボ数が同じ場合は、合計パワーを比較し、大きい方が勝利します。</li>
              </ol>

              <h3>勝利時の処理</h3>
              <p>勝者は、自分の場のカードの最大のブレイクの値だけデッキからカードを捨て札にします。</p>
              <p>場に出たカードはすべて捨て札にします。</p>

              <HighlightBox type="tip" title="アドバンスルール">
                <h4>敗北時の処理</h4>
                <p>敗者は、自分の場のカードのうちスキルを持つカードをストックエリアに移動します。</p>

                <h4>スキルの使用</h4>
                <p>ストックエリアのカードはいつでも何枚でもスキルを発動できます。</p>
                <p>スキルを発動したカードは捨て札になります。</p>
                <ul>
                  <li><strong>Macho：</strong>このターンのパワー合計値＋３</li>
                  <li><strong>Tempo：</strong>手札を1枚山札の一番下に置き、カードを一枚引く</li>
                  <li><strong>Charge：</strong>捨て札のカードを1枚手札に加える</li>
                </ul>
              </HighlightBox>
            </RuleSection>

            {/* コンボ */}
            <RuleSection id="combo" title="コンボ" hasImage imagePlaceholder>
              <p>コンボは対戦での勝利の鍵となる重要な要素です。</p>

              <div className="combo-types">
                <div className="combo-type-card">
                  <h4>🔢 数字コンボ</h4>
                  <p>直前に出したカードに記載された数字コンボと同じパワーを持つカードを続けて出せます。</p>
                </div>

                <div className="combo-type-card">
                  <h4>🎨 色コンボ</h4>
                  <p>直前に出したカードと同じ色で、より大きなパワーを持つカードを続けて出せます。</p>
                </div>
              </div>
            </RuleSection>

            {/* チップ */}
            <RuleSection id="chips" title="チップ" imagePlaceholder>
              <h3>チップの獲得方法</h3>
              <p>対戦の勝敗に応じてチップを獲得できます。</p>

              <h3>チップの使用用途</h3>
              <ol>
                <li>ショップでのカード購入</li>
                <li>トレードの対価</li>
              </ol>

              <HighlightBox type="tip" title="戦略のヒント">
                <p>デッキ枚数が多いほど勝利時の報酬が高くなりますが、デッキ構築の制約も厳しくなります。</p>
                <p>バランスを考えてデッキを構築しましょう。</p>
              </HighlightBox>
            </RuleSection>

            {/* 対戦報酬 */}
            <RuleSection id="rewards" title="対戦報酬">
              <TableSection
                description="デッキ枚数に応じて、対戦での勝敗によって獲得できるチップが変わります。"
                headers={rewardTableHeaders}
                rows={rewardTableRows}
              />
            </RuleSection>

            {/* ショップ */}
            <RuleSection id="shop" title="ショップ" imagePlaceholder>
              <p>1ラウンドにつき購入できるカードは最大3枚です。</p>
              <p>支払うチップ数に応じてカードを1枚引きます。</p>

              <TableSection
                headers={shopTableHeaders}
                rows={shopTableRows}
              />

              <HighlightBox type="info" title="キングカードについて">
                <p>ショップで購入したカードがキングカードだった場合、キングトークンを1枚獲得します。</p>
                <p>サプライのキングトークンが減ることでゲームは終了に向かいます。</p>
              </HighlightBox>
            </RuleSection>

            {/* キングマッチ */}
            <RuleSection id="king-match" title="キングマッチ" hasImage imagePlaceholder>
              <p>サプライのキングトークンがすべてなくなったら、キングマッチが開始されます。</p>

              <h3>キングマッチの流れ</h3>
              <ol>
                <li>キングトークン保持数が少ない人から順に対戦を行います。</li>
                <li>勝者同士が次の対戦を行います。</li>
                <li>最後まで勝ち残ったプレイヤーがこのセッションの勝者となります。</li>
              </ol>

              <HighlightBox type="important" title="最終決戦">
                <p>キングマッチはゲームの集大成です。</p>
                <p>これまで構築してきたデッキの真価が問われます。</p>
              </HighlightBox>
            </RuleSection>

            {/* まとめ */}
            <RuleSection id="summary" title="まとめ">
              <div className="summary-cards">
                <div className="summary-card">
                  <h4>📚 デッキ構築</h4>
                  <p>デッキは9枚以上。カードのパワーはデッキ枚数以下まで。</p>
                </div>

                <div className="summary-card">
                  <h4>⚔️ 対戦</h4>
                  <p>対戦は1対1で行い、デッキを0枚にしたら勝利。</p>
                </div>

                <div className="summary-card">
                  <h4>🎯 判定</h4>
                  <p>判定はコンボ数が優先、その次にパワー合計値。</p>
                </div>

                <div className="summary-card">
                  <h4>💥 ブレイク</h4>
                  <p>勝者はブレイクの値に応じてデッキを削り、場は全て捨て札になる。</p>
                </div>

                <div className="summary-card">
                  <h4>💰 ショップ</h4>
                  <p>報酬のチップでカードを購入・トレードし、デッキを強化する。</p>
                </div>

                <div className="summary-card">
                  <h4>👑 キングマッチ</h4>
                  <p>キングマッチに勝てばゲームに勝利する。</p>
                </div>
              </div>
            </RuleSection>
          </main>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;
