import { useState } from 'react'
import './RecipeDetail.css'

const STATUS_IMAGE = 'http://localhost:3845/assets/ba55cde1b25994eb9a947a7394465675848160fe.png'
const BACK_ICON = 'http://localhost:3845/assets/dab7133bd4e9d2c98a89eba6525151846655618a.svg'
const SHARE_ICON = 'http://localhost:3845/assets/ddc80d5f64ec9e582caa1040a5e41e315b6e3f6b.svg'
const HERO_IMAGE = 'http://localhost:3845/assets/8a3c69e9511f3c3c8451cf97e00c02fb2436fb5b.png'
const AUTHOR_AVATAR = 'http://localhost:3845/assets/75aa1276383e620529afcb286952385adda4ca3b.png'
const BRANCH_ICON = 'http://localhost:3845/assets/bca50743e960708810e3bbfafc580ee3181f5c27.svg'
const CHAT_ICON = 'http://localhost:3845/assets/b5f1ef92e6c9345b8327cf72f77557bdf21a5965.svg'
const BOOKMARK_ICON = 'http://localhost:3845/assets/6706e034eb4cd22bf16fc919ef81e69d672589c5.svg'
const OTHER_TREES_POST_IMAGE_1 = 'http://localhost:3845/assets/e1a63ba4456a2c8409458762706b07da16d972e4.png'
const OTHER_TREES_POST_IMAGE_2 = 'http://localhost:3845/assets/4771a0618a07a2f5baa00d0bcc04bb8f9105fa0e.png'
const MY_TREES_POST_IMAGE = 'http://localhost:3845/assets/63dbf4041bb3cbbbf3e7456482213615ecc0c215.png'

const POSTS_BY_TAB = {
  my: [
    {
      id: 'my-uncle-jon',
      name: 'Uncle Jon',
      time: '5 mins ago',
      avatar: 'http://localhost:3845/assets/4e901f468aa1eb964c3cec35609e5762c0485d9e.png',
      body: 'tried making this the same way. turns out patience really does matter.',
    },
    {
      id: 'my-mom',
      name: 'Mom',
      time: '5 mins ago',
      avatar: 'http://localhost:3845/assets/baa1cbcbe2250c59af27a3ee93eec66927ac19e8.png',
      body: 'still learning, but i did it!',
      image: MY_TREES_POST_IMAGE,
    },
  ],
  other: [
    {
      id: 'other-mom',
      name: 'Mom from Hong Family',
      time: '5 mins ago',
      avatar: 'http://localhost:3845/assets/de328d1d26cc9e14ceba885a5e9d25cc84861523.png',
      body: 'made mine spicer by adding more spices.',
      image: OTHER_TREES_POST_IMAGE_1,
    },
    {
      id: 'other-aunt-clara',
      name: 'Aunt Clara from Wang Family',
      time: '5 mins ago',
      avatar: 'http://localhost:3845/assets/1345f044f0faa122b00b19bdd071f6925aa17ea0.png',
      body: 'Used less sugar!',
    },
    {
      id: 'other-sarah',
      name: 'Sarah from Smith Family',
      time: '5 mins ago',
      avatar: 'http://localhost:3845/assets/191bdf7eb16118f7330bb07741ec06820e854f5f.png',
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
          <img src={BACK_ICON} alt="" />
        </button>
        <h1>Recipe Origin</h1>
        <button type="button" className="recipe-detail__icon-btn" aria-label="Share recipe">
          <img src={SHARE_ICON} alt="" />
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
