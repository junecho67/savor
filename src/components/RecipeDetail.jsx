import { useState } from 'react'
import './RecipeDetail.css'

const STATUS_IMAGE = '/savor/wifi top right.png?v=3'
const BACK_ICON = '/savor/Frame 70.svg'
const SHARE_ICON = '/savor/addrecipe.svg'
const HERO_IMAGE = '/savor/chofamilymadechickencurry.png'
const AUTHOR_AVATAR = '/savor/mom.png'
const BRANCH_ICON = '/savor/leaf.svg'
const CHAT_ICON = '/savor/comment.svg'
const BOOKMARK_ICON = '/savor/save.svg'
const OTHER_TREES_POST_IMAGE_1 = '/savor/momfromhongfamily.png'
const OTHER_TREES_POST_IMAGE_2 = '/savor/sarah.png'
const MY_TREES_POST_IMAGE = '/savor/Home_cooked_Chicken_Curry.jpg'

const POSTS_BY_TAB = {
  my: [
    {
      id: 'my-uncle-jon',
      name: 'Uncle Jon',
      time: '5 mins ago',
      avatar: '/savor/unclejon.png',
      body: 'tried making this the same way. turns out patience really does matter.',
    },
    {
      id: 'my-mom',
      name: 'Mom',
      time: '5 mins ago',
      avatar: '/savor/mom.png',
      body: 'still learning, but i did it!',
      image: MY_TREES_POST_IMAGE,
    },
  ],
  other: [
    {
      id: 'other-mom',
      name: 'Mom from Hong Family',
      time: '5 mins ago',
      avatar: '/savor/momfromhongfamily.png',
      body: 'made mine spicer by adding more spices.',
      image: OTHER_TREES_POST_IMAGE_1,
    },
    {
      id: 'other-aunt-clara',
      name: 'Aunt Clara from Wang Family',
      time: '5 mins ago',
      avatar: '/savor/auntclara.png',
      body: 'Used less sugar!',
    },
    {
      id: 'other-sarah',
      name: 'Sarah from Smith Family',
      time: '5 mins ago',
      avatar: '/savor/sarah.png',
      body: 'followed the recipe as closely as i could. took my time with the onions like she said.',
      image: OTHER_TREES_POST_IMAGE_2,
    },
  ],
}

function RecipeDetail({ onBack, onOpenGrowLeaf, onOpenRecipe }) {
  const [activeTreeTab, setActiveTreeTab] = useState('other')
  const tabPosts = POSTS_BY_TAB[activeTreeTab]

  return (
    <section className="recipe-detail" aria-label="Recipe detail page">
      <div className="recipe-detail__status">
        <span>10:00 AM</span>
        <img src={STATUS_IMAGE} alt="" />
      </div>
      <div className="recipe-detail__topbar">
        <button type="button" className="recipe-detail__icon-btn" aria-label="Go back" onClick={onBack}>
          <img src={BACK_ICON} alt="" className="recipe-detail__icon-back" />
        </button>
        <h1>Recipe Origin</h1>
        <button type="button" className="recipe-detail__icon-btn" aria-label="Share recipe">
          <img src={SHARE_ICON} alt="" className="recipe-detail__icon-share" />
        </button>
      </div>
      <article className="recipe-detail__main-post">
        <div className="recipe-detail__hero">
          <img src={HERO_IMAGE} alt="Chicken curry" />
          <button type="button" className="recipe-detail__view-button" onClick={onOpenRecipe}>View Recipe</button>
        </div>
        <div className="recipe-detail__author">
          <img src={AUTHOR_AVATAR} alt="" className="recipe-detail__author-avatar" />
          <div>
            <p className="recipe-detail__author-name"><strong>Dad</strong> from <strong>Cho Family</strong></p>
            <p className="recipe-detail__author-handle">@chodad</p>
          </div>
        </div>
        <div className="recipe-detail__content">
          <h2>Chicken Curry</h2>
          <p>this chicken curry was something we always ate on weekends. it&apos;s simple, but you can&apos;t rush it. slowly cooking the onions and letting the chicken fat build the flavor is what makes it taste right!</p>
        </div>
        <div className="recipe-detail__actions">
          <button type="button" className="recipe-detail__grow-leaf-btn" aria-label="Grow a leaf" onClick={onOpenGrowLeaf}>
            <img src={BRANCH_ICON} alt="" />6
          </button>
          <span><img src={CHAT_ICON} alt="" />3</span>
          <button type="button" className="recipe-detail__bookmark-btn" aria-label="Save"><img src={BOOKMARK_ICON} alt="" /></button>
        </div>
      </article>
      <div className="recipe-detail__tree-tabs">
        <button
          type="button"
          className={`recipe-detail__tree-tab ${activeTreeTab === 'my' ? 'recipe-detail__tree-tab--active' : ''}`}
          onClick={() => setActiveTreeTab('my')}
        >
          My Tree
        </button>
        <button
          type="button"
          className={`recipe-detail__tree-tab ${activeTreeTab === 'other' ? 'recipe-detail__tree-tab--active' : ''}`}
          onClick={() => setActiveTreeTab('other')}
        >
          Other Trees
        </button>
      </div>
      <div className="recipe-detail__tree-feed">
        {tabPosts.map((post, index) => (
          <article
            key={post.id}
            className={`recipe-detail__tree-post ${index < tabPosts.length - 1 ? 'recipe-detail__tree-post--border' : ''}`}
          >
            <div className="recipe-detail__tree-post-header">
              <img src={post.avatar} alt="" className="recipe-detail__tree-post-avatar" />
              <div className="recipe-detail__tree-post-meta">
                <p>{post.name}</p>
                <span>{post.time}</span>
              </div>
            </div>
            {post.image && (
              <div className="recipe-detail__tree-post-image-wrap">
                <img src={post.image} alt="" className="recipe-detail__tree-post-image" />
              </div>
            )}
            <p className="recipe-detail__tree-post-body">{post.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RecipeDetail
