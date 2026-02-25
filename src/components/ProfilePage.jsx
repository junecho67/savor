import './ProfilePage.css'

const TOP_PROFILE_IMAGE = 'http://localhost:3845/assets/9bf4d2684383732136e64955c3a44ff54bcea562.png'

const FAMILY_MEMBERS = [
  {
    name: 'Grandma',
    avatar: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=80&h=80&fit=crop',
  },
  {
    name: 'Mom',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop',
  },
  {
    name: 'Dad',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
  },
  {
    name: 'Cousin Ian',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop',
  },
]

const SAVED_RECIPES = [
  'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&q=80',
  'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80',
  'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80',
]

const RECIPES_MADE = [
  {
    person: 'Grandma',
    time: '1 day ago',
    likes: 6,
    comments: 3,
    images: ['https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80'],
  },
  {
    person: 'Mom',
    time: '2 days ago',
    likes: 2,
    comments: 1,
    images: [
      'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&q=80',
      'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80',
    ],
  },
  {
    person: 'Dad',
    time: '2 days ago',
    likes: 10,
    comments: 2,
    images: ['https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500&q=80'],
  },
]

function ProfilePage() {
  return (
    <section className="profile-page" aria-label="Profile page">
      <div className="profile-page__status">10:00 AM</div>

      <header className="profile-page__header">
        <h1>June Cho</h1>
        <div className="profile-page__header-icons">
          <button type="button" aria-label="Share">
            <ShareIcon />
          </button>
          <button type="button" aria-label="Settings">
            <SettingsIcon />
          </button>
        </div>
      </header>

      <section className="profile-page__hero">
        <img src={TOP_PROFILE_IMAGE} alt="June profile" className="profile-page__hero-avatar" />
        <p className="profile-page__username">@junecho</p>
        <div className="profile-page__hero-actions">
          <button type="button">Edit Profile</button>
          <button type="button">Share Profile</button>
          <button type="button" aria-label="More options" className="profile-page__arrow-btn">▾</button>
        </div>
      </section>

      <section className="profile-page__section">
        <div className="profile-page__section-title">
          <h2>Family Members</h2>
          <button type="button" aria-label="Add family member">+</button>
        </div>
        <ul className="profile-page__family-list">
          {FAMILY_MEMBERS.map((member) => (
            <li key={member.name}>
              <img src={member.avatar} alt="" />
              <span>{member.name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="profile-page__section">
        <div className="profile-page__section-title">
          <h2>Saved Recipes</h2>
        </div>
        <div className="profile-page__saved-scroll">
          {SAVED_RECIPES.map((src, idx) => (
            <article key={src + idx} className="profile-page__saved-card">
              <img src={src} alt="" />
            </article>
          ))}
        </div>
      </section>

      <section className="profile-page__recipes-made">
        <div className="profile-page__section-title">
          <h2>Recipes Made</h2>
        </div>
        <div className="profile-page__tabs">
          <button type="button" className="profile-page__tab profile-page__tab--active">Family</button>
          <button type="button" className="profile-page__tab">Others</button>
        </div>

        <div className="profile-page__posts">
          {RECIPES_MADE.map((post) => (
            <article key={`${post.person}-${post.time}`} className="profile-page__post">
              <div className="profile-page__post-meta">
                <img src={FAMILY_MEMBERS.find((m) => m.name === post.person)?.avatar || FAMILY_MEMBERS[0].avatar} alt="" />
                <div>
                  <p className="profile-page__post-person">{post.person}</p>
                  <p className="profile-page__post-time">{post.time}</p>
                </div>
              </div>
              <div className={`profile-page__post-images ${post.images.length > 1 ? 'profile-page__post-images--grid' : ''}`}>
                {post.images.map((img) => (
                  <img key={img} src={img} alt="" />
                ))}
              </div>
              <div className="profile-page__post-actions">
                <span>🍃 {post.likes}</span>
                <span>💬 {post.comments}</span>
                <button type="button" aria-label="Save recipe">
                  <BookmarkIcon />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

function ShareIcon() {
  return (
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 12V2M7 2L4 5M7 2L10 5" stroke="#D75C41" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 8V15C2 15.6 2.4 16 3 16H11C11.6 16 12 15.6 12 15V8" stroke="#D75C41" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8.75A3.25 3.25 0 1 0 12 15.25A3.25 3.25 0 0 0 12 8.75Z" stroke="#D75C41" strokeWidth="1.7" />
      <path d="M19 12A7 7 0 0 0 18.95 11.12L21 9.5L19 6L16.6 6.8A7 7 0 0 0 15 5.88L14.5 3.3H9.5L9 5.88A7 7 0 0 0 7.4 6.8L5 6L3 9.5L5.05 11.12A7 7 0 0 0 5.05 12.88L3 14.5L5 18L7.4 17.2A7 7 0 0 0 9 18.12L9.5 20.7H14.5L15 18.12A7 7 0 0 0 16.6 17.2L19 18L21 14.5L18.95 12.88C18.98 12.59 19 12.3 19 12Z" stroke="#D75C41" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BookmarkIcon() {
  return (
    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 1.5H10V14L6 11L2 14V1.5Z" stroke="#D75C41" strokeWidth="1.2" />
    </svg>
  )
}

export default ProfilePage
