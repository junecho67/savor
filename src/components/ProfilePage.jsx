import './ProfilePage.css'

const imgStatus = 'http://localhost:3845/assets/ba55cde1b25994eb9a947a7394465675848160fe.png'
const imgShare = 'http://localhost:3845/assets/c4a628b79e6cc3f5ab5479300f51021d8fdd776d.svg'
const imgSettings = 'http://localhost:3845/assets/55499c7e3e87acf5489b84c357c6434beb8570f3.svg'
const imgArrowDown = 'http://localhost:3845/assets/278e3875f5aba6039bc333a171f6be97da01e5dd.svg'
const imgPlus = 'http://localhost:3845/assets/009c474ed4faa12063d94320754fccbf5eb93f4d.svg'
const imgBranch = 'http://localhost:3845/assets/bca50743e960708810e3bbfafc580ee3181f5c27.svg'
const imgChat = 'http://localhost:3845/assets/b5f1ef92e6c9345b8327cf72f77557bdf21a5965.svg'
const imgBookmark = 'http://localhost:3845/assets/6706e034eb4cd22bf16fc919ef81e69d672589c5.svg'

const imgTopProfile = 'http://localhost:3845/assets/9bf4d2684383732136e64955c3a44ff54bcea562.png'
const imgGrandma = 'http://localhost:3845/assets/b6beaffbf80d98602c1e345bb8e77d18fa1c8530.png'
const imgMom = 'http://localhost:3845/assets/de328d1d26cc9e14ceba885a5e9d25cc84861523.png'
const imgDad = 'http://localhost:3845/assets/baa1cbcbe2250c59af27a3ee93eec66927ac19e8.png'
const imgCousin = 'http://localhost:3845/assets/ccfa7cb9160116512a83c2308aa9c3ee27295503.png'

const imgSavedRibs = 'http://localhost:3845/assets/b2d70ff0d7647565bf13f21613ff867f80284033.png'
const imgSavedPasta = 'http://localhost:3845/assets/486bad1476f9620964c6dd04bdf3bbc2d4a65863.png'

const imgPost1 = 'http://localhost:3845/assets/8a3c69e9511f3c3c8451cf97e00c02fb2436fb5b.png'
const imgPost2A = 'http://localhost:3845/assets/9593145b9752fe3eda37994b0fd256c23baab042.png'
const imgPost2B = 'http://localhost:3845/assets/17c2d2f8c4d3e47984e88f52f63ca5c35e9daa9c.png'
const imgPost3 = 'http://localhost:3845/assets/457fe52981ed5f6eddb3cbf9d060444e0b172849.png'

const FAMILY_MEMBERS = [
  { name: 'Grandma', avatar: imgGrandma },
  { name: 'Mom', avatar: imgMom },
  { name: 'Dad', avatar: imgDad },
  { name: 'Cousin Ian', avatar: imgCousin },
]

const SAVED_RECIPES = [
  { image: imgSavedRibs, title: 'BBQ Ribs', subtitle: "Uncle Joe from Hong's" },
  { image: imgSavedPasta, title: 'Tomato Pasta', subtitle: "Sarah from Smith's" },
  { image: imgSavedPasta, title: 'Tomato Pasta', subtitle: "Sarah from Smith's" },
]

const RECIPES_MADE = [
  { person: 'Grandma', avatar: imgGrandma, time: '1 day ago', likes: 6, comments: 3, images: [imgPost1] },
  { person: 'Mom', avatar: imgMom, time: '2 days ago', likes: 2, comments: 1, images: [imgPost2A, imgPost2B] },
  { person: 'Dad', avatar: imgDad, time: '2 days ago', likes: 10, comments: 2, images: [imgPost3] },
]

function ProfilePage() {
  return (
    <section className="profile-page" aria-label="Profile page">
      <div className="profile-page__status">
        <span>10:00 AM</span>
        <img src={imgStatus} alt="" />
      </div>

      <header className="profile-page__header">
        <h1>June Cho</h1>
        <div className="profile-page__header-icons">
          <button type="button" aria-label="Share">
            <img src={imgShare} alt="" />
          </button>
          <button type="button" aria-label="Settings">
            <img src={imgSettings} alt="" />
          </button>
        </div>
      </header>

      <section className="profile-page__hero">
        <img src={imgTopProfile} alt="June profile" className="profile-page__hero-avatar" />
        <p className="profile-page__username">@junecho</p>
        <div className="profile-page__hero-actions">
          <button type="button">Edit Profile</button>
          <button type="button">Share Profile</button>
          <button type="button" aria-label="More options" className="profile-page__arrow-btn">
            <img src={imgArrowDown} alt="" />
          </button>
        </div>
      </section>

      <section className="profile-page__section">
        <div className="profile-page__section-title">
          <h2>Family Members</h2>
          <button type="button" aria-label="Add family member">
            <img src={imgPlus} alt="" />
          </button>
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
          {SAVED_RECIPES.map((item, idx) => (
            <article key={item.title + idx} className="profile-page__saved-card">
              <img src={item.image} alt="" />
              <div className="profile-page__saved-card-labels">
                <p className="profile-page__saved-title">{item.title}</p>
                <p className="profile-page__saved-subtitle">{item.subtitle}</p>
              </div>
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
                <img src={post.avatar} alt="" />
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
                <span>
                  <img src={imgBranch} alt="" />
                  {post.likes}
                </span>
                <span>
                  <img src={imgChat} alt="" />
                  {post.comments}
                </span>
                <button type="button" aria-label="Save recipe">
                  <img src={imgBookmark} alt="" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default ProfilePage
