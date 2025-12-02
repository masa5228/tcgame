import React, { useState } from 'react';
import RuleSection from './rules/RuleSection';
import InfoCard from './rules/InfoCard';
import TableSection from './rules/TableSection';
import HighlightBox from './rules/HighlightBox';
import RulesNav from './rules/RulesNav';
import './RulesPage.css';

const RulesPage = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
  const sections = [
    { id: 'basic-info', title: 'ゲームの基本情報' },
    { id: 'introduction', title: 'ゲームの流れ' },
    { id: 'components', title: 'コンポーネント' },
    { id: 'card-status', title: 'カードのステータス' },
    { id: 'preparation', title: 'ゲームの準備' },
    { id: 'round-flow', title: 'ラウンドの流れ' },
    { id: 'battle-rules', title: '対戦ルール' },
    { id: 'combo', title: 'コンボ' },
    { id: 'rewards', title: '対戦報酬' },
    { id: 'shop', title: 'ショップ' },
    { id: 'king-match', title: 'キングマッチ' },
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
    ['ノーマル', 'チップ1枚', '1～7', '65枚／キング6枚'],
    ['レア', 'チップ4枚', '5～10', '50枚／キング6枚'],
    ['ゴールド', 'チップ14枚', '7～12', '39枚／キング6枚'],
    ['レジェンド', 'チップ30枚', '11～15', '16枚／キング6枚'],
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
        <div className={`rules-content-wrapper ${isNavCollapsed ? 'nav-collapsed' : ''}`}>
          {/* サイドナビゲーション */}
          <aside className="rules-sidebar">
            <RulesNav
              sections={sections}
              isCollapsed={isNavCollapsed}
              onToggle={toggleNav}
            />
          </aside>

          {/* メインコンテンツ */}
          <main className="rules-content">
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

            {/* ゲームの基本 */}
            <RuleSection id="introduction" title="ゲームの流れ" hasImage ={true} imageUrl={"/assets/images/game_cycle.png"}>
              <p>
                カードを集め、デッキを構築し、コンボを駆使して戦うカードゲームです。
              </p>
              <p>
                プレイヤーはトレードやショップでカードを手に入れ、
                強力なデッキを作りながら対戦を繰り返します。
              </p>
              <p>
                最終的にキングマッチに勝利したプレイヤーがゲームの覇者となります。
              </p>
              <p>
                基本のカジュアルルールと上級者向けのアドバンスルールの2種類があります。
              </p>
            </RuleSection>

            {/* コンポーネント */}
            <RuleSection id="components" title="コンポーネント" hasImage ={true} imageUrl={"/assets/images/compornent.png"}>
              <ul>
                <li>キングトークン：13枚</li>
                <li>通貨用チップ</li>
                <li>スターターカード：36枚</li>
                <li>ノーマルカード：65枚</li>
                <li>レアカード：50枚</li>
                <li>ゴールドカード：39枚</li>
                <li>レジェンドカード：16枚</li>
              </ul>
            </RuleSection>

            {/* カードのステータス */}
            <RuleSection id="card-status" title="カードのステータス" hasImage ={true} imageUrl={"/assets/images/card_status.png"}>
              <p>各カードは以下の要素を持ちます。</p>
              <ul>
                <li><strong>パワー：</strong>
                  <p>1～15の数値</p>
                </li>
                <li><strong>レアリティ：</strong>
                  <p>スターター、ノーマル、レア、ゴールド、レジェンド</p>
                </li>
                <li><strong>パワーコンボ：</strong>
                  <p>つながるパワーを示すアイコン（0～7個）</p>
                </li>
                <li><strong>ブレイク：</strong>
                  <p>アイコンが1～4まである</p>
                </li>
                <li><strong>スキル：</strong>
                  <p>3種類のスキル（Macho, Tempo, Charge）</p>
                </li>
                <li><strong>カラー：</strong>
                  <p>赤・青・緑・黄・紫の中から最大2色、または白</p>
                </li>
              </ul>
            </RuleSection>

            {/* ゲームの準備 */}
            <RuleSection id="preparation" title="ゲームの準備" hasImage ={true} imageUrl={"/assets/images/starterdecks.png"}>
              <ol>
                <li>スターター以外のカードをレアリティごとにまとめてサプライの山を作ります。</li>
                <li>各プレイヤーはスターターカード6枚で構成された初期デッキを1つ選びます。</li>
                <li>各プレイヤーはさらにノーマルカードをランダムに3枚受け取ります。</li>
                <li>初期チップは0枚です。</li>
                <li>プレイヤー人数×3+1枚のキングトークンをサプライに用意します。</li>
              </ol>

              <HighlightBox type="info" title="各初期デッキの特徴">
                {/* <p><strong>全デッキ共通：</strong>柴犬、少女、ネズミの子、わんぱく坊主</p> */}
                <ul>
                  <li><strong>騎士デッキ：</strong>入門赤デッキ</li>
                  <li><strong>マッスルデッキ：</strong>パワー型緑デッキ</li>
                  <li><strong>黒魔術デッキ：</strong>入門紫デッキ</li>
                  <li><strong>ネズミデッキ：</strong>入門黄デッキ</li>
                  <li><strong>家族デッキ：</strong>パワーコンボ白デッキ</li>
                  <li><strong>犬デッキ：</strong>安定青デッキ</li>
                </ul>
              </HighlightBox>
            </RuleSection>

            {/* ラウンドの流れ */}
            <RuleSection id="round-flow" title="ラウンドの流れ">
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
                    <h4>対戦を行う</h4>
                    <p>全プレイヤーの対戦機会が均一になるように、今回のラウンドの対戦相手を決めます。</p>
                    <p>対戦ルールに従って1対1で勝負します。</p>
                    <p>勝敗に応じてチップを得ます。</p>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="flow-step-number">3</div>
                  <div className="flow-step-content">
                    <h4>お買い物</h4>
                    <p>各プレイヤーは最大3枚までカードを購入できます。</p>
                    <p>購入時にキングカードを引いた場合、キングトークンを1枚獲得します。</p>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="flow-step-number">4</div>
                  <div className="flow-step-content">
                    <h4>ラウンド終了</h4>
                    <p>サプライのキングトークンがすべてなくなったらキングマッチへ。</p>
                    <p>条件を満たしていない場合は次のラウンドへ進みます。</p>
                  </div>
                </div>
              </div>
            </RuleSection>

            {/* 対戦ルール */}
            <RuleSection id="battle-rules" title="対戦ルール" hasImage imageUrl="/assets/images/battle_field.png">
              <HighlightBox type="important" title="勝利条件">
                <p>先に自分のデッキが0枚になったプレイヤーが対戦に勝利します。</p>
              </HighlightBox>

              <h3>ターンの流れ</h3>
              <ol>
                <li>手札が3枚になるようにデッキからカードを引きます。</li>
                <li>先手プレイヤーから順にコンボの規則に従ってカードをコンボエリアへ出します。
                  出せない場合はパスします。</li>
                <li>両者が出せなくなった時点でコンボの勝敗判定を行います。</li>
                <li>コンボエリアのカードを捨て札へ。</li>
                <li>次のターンへ</li>
              </ol>

              <h3>コンボの勝敗判定</h3>
              <ol>
                <li>コンボ数が多いプレイヤーが勝利します。</li>
                <li>コンボ数が同じ場合は、合計パワーを比較し、大きい方が勝利します。</li>
                <li>コンボ数も合計パワーも同じ場合は引き分けとします。</li>
                <li>引き分けは両方が敗者となります。</li>
                <li>勝者が次のターンの先手です。引き分け時は先手が変わりません。</li>
              </ol>

              <h3>コンボに勝利時の処理</h3>
              <p>勝者は、自分のコンボエリアのカードの最大のブレイクの値だけデッキからカードを捨て札にします。</p>

              <HighlightBox type="tip" title="アドバンスルール">
                <h4>コンボに敗北時の処理</h4>
                <p>敗者は、自分のコンボエリアのカードのうちスキルを持つカードをスキルエリアに移動します。</p>
                <h4>スキルの使用</h4>
                <p>スキルエリアのカードはいつでも何枚でもスキルを発動できます。</p>
                <p>スキルを発動したカードは捨て札になります。</p>
                <ul>
                  <li><strong>Macho：</strong>このターンのパワー合計値＋３</li>
                  <li><strong>Tempo：</strong>手札を1枚山札の一番下に置き、カードを一枚引く</li>
                  <li><strong>Charge：</strong>捨て札のカードを1枚手札に加える</li>
                </ul>
              </HighlightBox>
            </RuleSection>

            {/* コンボ */}
            <RuleSection id="combo" title="コンボ" hasImage imageUrl="/assets/images/combo.png">
              <p>以下のルールに従ってカードをコンボエリアに出せます。</p>

              <div className="combo-types">
                <div className="combo-type-card">
                  <h4>🔢 パワーコンボ</h4>
                  <p>直前に出したカードに記載されたパワーコンボと同じパワーを持つカードを続けて出せます。</p>
                </div>

                <div className="combo-type-card">
                  <h4>🎨 カラーコンボ</h4>
                  <p>直前に出したカードと同じ色で、より大きなパワーを持つカードを続けて出せます。</p>
                  <p>2色のカードは両方の色として扱います。</p>
                  <p>白のカードはカラーコンボができません。</p>
                </div>
              </div>
            </RuleSection>

            {/* 対戦報酬 */}
            <RuleSection id="rewards" title="対戦報酬"  >
              <p>使用したデッキの枚数と対戦での勝敗によって獲得できるチップ量が変わります。</p>
              <p>3人プレイ時に対戦を行わなかったプレイヤーは、敗者と同額のチップを受け取ります。</p>
              <TableSection
                headers={rewardTableHeaders}
                rows={rewardTableRows}
              />
            </RuleSection>

            {/* ショップ */}
            <RuleSection id="shop" title="ショップ" >
              <p>1ラウンドにつき購入できるカードは最大3枚です。</p>
              <p>どのレアリティのサプライからカードを購入するかで支払うチップが異なります。</p>
              <p>例：ゴールド1枚、レア2枚を購入する場合は 14+4+4=22枚のチップを払います。</p>

              <TableSection
                headers={shopTableHeaders}
                rows={shopTableRows}
              />

              <HighlightBox type="info" title="キングカードについて">
                <p>ショップで購入したカードがキングカードだった場合、キングトークンを1枚獲得します。</p>
                <p>レアリティが高いサプライほどキングトークンが出る確率が高くなっています。</p>
                <p>サプライのキングトークンがなくなった次のラウンドはキングマッチを行います。</p>
              </HighlightBox>
            </RuleSection>

            {/* キングマッチ */}
            <RuleSection id="king-match" title="キングマッチ" >
              <p>サプライのキングトークンがすべてなくなったら、次のラウンドからキングマッチが開始されます。</p>
              <p>キングマッチが開催されたら、ショップからのカード購入ができなくなります。</p>
              <p>キングマッチが開催されたら、カードのトレードができなくなります。</p>
              <p>キングマッチの対戦で使うデッキは必ず15枚以上のデッキを使用します。</p>

              <h3>キングマッチの流れ</h3>
              <ol>
                <li>キングトークン保持数が少ない人から順に対戦を行います。</li>
                <li>勝者同士が次の対戦を行います。</li>
                <li>最後まで勝ち残ったプレイヤーがこのゲームの勝者となります。</li>
              </ol>

              <HighlightBox type="important" title="最終決戦">
                <p>これまで構築してきたデッキの真価が問われます。</p>
                <p>最高のデッキで挑みましょう！</p>
              </HighlightBox>
            </RuleSection>
          </main>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;
