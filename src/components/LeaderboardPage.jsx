import './LeaderboardPage.css'

const STATUS_RIGHT = '/savor/wifi top right.png?v=3'
const BADGE_1 = '/savor/SavorLeaderboardBadges-07 1.png'
const BADGE_2 = '/savor/SavorLeaderboardBadges-06 1.png'
const BADGE_3 = '/savor/SavorLeaderboardBadges-06 1.png'

const TOP_THREE = [
  { rank: 1, family: 'Jang Family', trees: 52, badge: BADGE_1, cardClass: 'leaderboard-page__podium-card--first' },
  { rank: 2, family: 'Fox Family', trees: 49, badge: BADGE_2, cardClass: 'leaderboard-page__podium-card--second' },
  { rank: 3, family: 'Cho Family', trees: 43, badge: BADGE_3, cardClass: 'leaderboard-page__podium-card--third' },
]

const RANKED_FAMILIES = [
  { rank: 4, family: 'Garcia Family', trees: 39 },
  { rank: 5, family: 'Hong Family', trees: 37 },
  { rank: 6, family: 'Lee Family', trees: 36 },
  { rank: 7, family: 'Martinez Family', trees: 34 },
  { rank: 8, family: 'Patel Family', trees: 31 },
  { rank: 9, family: 'Smith Family', trees: 29 },
  { rank: 10, family: 'Johnson Family', trees: 28 },
  { rank: 11, family: 'Robinson Family', trees: 27 },
  { rank: 12, family: 'Williams Family', trees: 25 },
  { rank: 13, family: 'Hernandez Family', trees: 23 },
  { rank: 14, family: 'Thompson Family', trees: 22 },
  { rank: 15, family: 'Nguyen Family', trees: 20 },
  { rank: 16, family: 'Brown Family', trees: 19 },
  { rank: 17, family: 'Davis Family', trees: 18 },
  { rank: 18, family: 'Miller Family', trees: 15 },
  { rank: 19, family: 'Wilson Family', trees: 14 },
  { rank: 20, family: 'Taylor Family', trees: 13 },
]

function LeaderboardPage() {
  return (
    <section className="leaderboard-page" aria-label="Leaderboard page">
      <div className="leaderboard-page__status">
        <span>10:00 AM</span>
        <img src={STATUS_RIGHT} alt="" />
      </div>

      <header className="leaderboard-page__header">
        <h1>Leaderboard</h1>
        <p>Discover the top 20 family forests growing the fastest.</p>
      </header>

      <div className="leaderboard-page__podium">
        {TOP_THREE.map((item) => (
          <article key={item.rank} className={`leaderboard-page__podium-card ${item.cardClass}`}>
            <span className="leaderboard-page__podium-rank">{item.rank}</span>
            <img src={item.badge} alt="" className="leaderboard-page__podium-badge" />
            <p className="leaderboard-page__podium-family">{item.family}</p>
            <p className="leaderboard-page__podium-trees">{item.trees} trees</p>
          </article>
        ))}
      </div>

      <div className="leaderboard-page__list-card">
        {RANKED_FAMILIES.map((item) => (
          <div key={item.rank} className="leaderboard-page__list-row">
            <span className="leaderboard-page__rank">{item.rank}</span>
            <span className="leaderboard-page__family">{item.family}</span>
            <span className="leaderboard-page__trees">{item.trees} trees</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LeaderboardPage
