import './LeaderboardPage.css'

const TOP_THREE = [
  { rank: 1, family: 'Jang Family', trees: 52 },
  { rank: 2, family: 'Fox Family', trees: 49 },
  { rank: 3, family: 'Cho Family', trees: 43 },
]

const RANKED_FAMILIES = [
  { rank: 4, family: 'Garcia Family', trees: 39 },
  { rank: 5, family: 'Hong Family', trees: 37 },
  { rank: 6, family: 'Lee Family', trees: 36 },
]

function LeaderboardPage() {
  return (
    <section className="leaderboard-page" aria-label="Leaderboard page">
      <div className="leaderboard-page__status">
        <span>10:00 AM</span>
        <span className="leaderboard-page__status-dots" aria-hidden><span /><span /><span /></span>
      </div>
      <header className="leaderboard-page__header">
        <h1>Leaderboard</h1>
        <p>Discover the top 20 family forests growing the fastest.</p>
      </header>
      <div className="leaderboard-page__podium">
        {TOP_THREE.map((item) => (
          <article key={item.rank} className="leaderboard-page__podium-card">
            <span className="leaderboard-page__podium-rank">{item.rank}</span>
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
