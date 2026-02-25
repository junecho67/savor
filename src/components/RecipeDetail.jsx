import './RecipeDetail.css'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1000&auto=format&fit=crop'
const AUTHOR_AVATAR = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop'
const BRANCH_ICON = 'http://localhost:3845/assets/bca50743e960708810e3bbfafc580ee3181f5c27.svg'
const CHAT_ICON = 'http://localhost:3845/assets/b5f1ef92e6c9345b8327cf72f77557bdf21a5965.svg'
const BOOKMARK_ICON = 'http://localhost:3845/assets/6706e034eb4cd22bf16fc919ef81e69d672589c5.svg'

function RecipeDetail({ onBack, onOpenGrowLeaf, onOpenRecipe }) {
  return (
    <section className="recipe-detail" aria-label="Recipe detail page">
      <div className="recipe-detail__status">
        <span>10:00 AM</span>
        <span className="recipe-detail__status-dots" aria-hidden><span /><span /><span /></span>
      </div>
      <div className="recipe-detail__topbar">
        <button type="button" className="recipe-detail__icon-btn" aria-label="Go back" onClick={onBack}>‹</button>
        <h1>Recipe Origin</h1>
        <button type="button" className="recipe-detail__icon-btn" aria-label="Share recipe">↗</button>
      </div>
      <article className="recipe-detail__card">
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
          <p>this chicken curry was something we always ate on weekends. it&apos;s simple, but you can&apos;t rush it.</p>
        </div>
        <div className="recipe-detail__actions">
          <button type="button" className="recipe-detail__grow-leaf-btn" aria-label="Grow a leaf" onClick={onOpenGrowLeaf}>
            <img src={BRANCH_ICON} alt="" />6
          </button>
          <span><img src={CHAT_ICON} alt="" />3</span>
          <button type="button" className="recipe-detail__bookmark-btn" aria-label="Save"><img src={BOOKMARK_ICON} alt="" /></button>
        </div>
      </article>
    </section>
  )
}

export default RecipeDetail
