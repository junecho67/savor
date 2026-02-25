import './ChallengeSection.css'

const CHALLENGE_IMAGE = 'http://localhost:3845/assets/fa977299ccebc5d764d99b8582cfc00a01f427cb.png'

function ChallengeSection() {
  return (
    <section className="challenge-section" aria-labelledby="challenge-title">
      <h2 id="challenge-title" className="challenge-title">This Week's Challenge</h2>
      <p className="challenge-description">
        Join the community cook-off and showcase your culinary skills!
      </p>
      <div className="challenge-card">
        <div className="challenge-card-image-wrap">
          <img
            src={CHALLENGE_IMAGE}
            alt="Bowl of chicken soup with herbs"
            className="challenge-card-image"
          />
          <div className="challenge-card-overlay" />
          <button type="button" className="challenge-cta">
            Join Challenge
          </button>
        </div>
      </div>
    </section>
  )
}

export default ChallengeSection
