import { useState } from 'react'
import './ProfilePage.css'

const imgStatus = '/savor/Group.svg'
const imgShare = '/savor/Frame 70.svg'
const imgSettings = '/savor/notification.svg'
const imgArrowDown = '/savor/Frame 70.svg'
const imgPlus = '/savor/addrecipe.svg'
const imgBranch = '/savor/leaf.svg'
const imgChat = '/savor/comment.svg'
const imgBookmark = '/savor/save.svg'

const imgTopProfile = '/savor/profile.svg'
const imgGrandma = '/savor/mom.png'
const imgMom = '/savor/mom.png'
const imgDad = '/savor/unclejon.png'
const imgCousin = '/savor/sarah.png'

const imgSavedRibs = '/savor/IndianChickenCurry.jpg'
const imgSavedPasta = '/savor/A_better_homemade_pasta.jpg'

const imgPost1 = '/savor/chofamilymadechickencurry.png'
const imgPost2A = '/savor/butter.png'
const imgPost2B = '/savor/butterpasta.png'
const imgPost3 = '/savor/Lattice_apple_pie.png'
const imgOtherMom = '/savor/momfromhongfamily.png'
const imgOtherDad = '/savor/unclejon.png'
const imgOtherPost1 = '/savor/momfromhongfamily.png'
const imgOtherPost2 = '/savor/sarah.png'

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

const FAMILY_RECIPES = [
  { person: 'Grandma', avatar: imgGrandma, time: '1 day ago', likes: 6, comments: 3, images: [imgPost1] },
  { person: 'Mom', avatar: imgMom, time: '2 days ago', likes: 2, comments: 1, images: [imgPost2A, imgPost2B] },
  { person: 'Dad', avatar: imgDad, time: '2 days ago', likes: 10, comments: 2, images: [imgPost3] },
]

const OTHER_RECIPES = [
  { person: 'Mom from Jang Family', avatar: imgOtherMom, time: '1 day ago', likes: 9, comments: 2, images: [imgOtherPost1] },
  { person: 'Dad from Jang Family', avatar: imgOtherDad, time: '1 day ago', likes: 1, comments: 0, images: [imgOtherPost2] },
]

function ProfilePage() {
  const [activeRecipesTab, setActiveRecipesTab] = useState('family')
  const recipes = activeRecipesTab === 'family' ? FAMILY_RECIPES : OTHER_RECIPES

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
          <button
            type="button"
            className={`profile-page__tab ${activeRecipesTab === 'family' ? 'profile-page__tab--active' : ''}`}
            onClick={() => setActiveRecipesTab('family')}
          >
            Family
          </button>
          <button
            type="button"
            className={`profile-page__tab ${activeRecipesTab === 'others' ? 'profile-page__tab--active' : ''}`}
            onClick={() => setActiveRecipesTab('others')}
          >
            Others
          </button>
        </div>

        <div className="profile-page__posts">
          {recipes.map((post) => (
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
