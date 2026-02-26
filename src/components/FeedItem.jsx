import './FeedItem.css'

const BRANCH_ICON = '/savor/leaf.svg'
const CHAT_ICON = '/savor/comment.svg'
const BOOKMARK_ICON = '/savor/save.svg'

function FeedItem({ id, avatar, actor, verb, title, time, image, images, likes, comments, onSelectRecipe, onOpenGrowLeaf }) {
  const isMulti = Array.isArray(images) && images.length > 0
  const isRecipeEntry = actor === 'Cho family' && verb === 'made' && title === 'chicken curry'

  const handleOpenRecipe = () => {
    if (isRecipeEntry && onSelectRecipe) onSelectRecipe(id)
  }

  const handleKeyDown = (event) => {
    if (!isRecipeEntry) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleOpenRecipe()
    }
  }

  const handleGrowLeafClick = (event) => {
    event.stopPropagation()
    if (isRecipeEntry && likes === 6 && onOpenGrowLeaf) onOpenGrowLeaf()
  }

  return (
    <article
      className={`feed-item ${isRecipeEntry ? 'feed-item--clickable' : ''}`}
      role={isRecipeEntry ? 'button' : undefined}
      tabIndex={isRecipeEntry ? 0 : undefined}
      onClick={isRecipeEntry ? handleOpenRecipe : undefined}
      onKeyDown={isRecipeEntry ? handleKeyDown : undefined}
      aria-label={isRecipeEntry ? 'Open Cho Family chicken curry recipe' : undefined}
    >
      <div className="feed-item-header">
        <img src={avatar} alt="" className="feed-item-avatar" />
        <div className="feed-item-meta">
          <p className="feed-item-title">
            <span className="feed-item-title-strong">{actor} </span>
            <span>{verb} </span>
            <span className="feed-item-title-strong">{title}</span>
          </p>
          <time className="feed-item-time">{time}</time>
        </div>
      </div>
      <div className={`feed-item-media ${isMulti ? 'feed-item-media--grid' : ''}`}>
        {isMulti ? (
          images.map((src, i) => (
            <img key={i} src={src} alt="" className="feed-item-image" />
          ))
        ) : (
          <img src={image} alt="" className="feed-item-image" />
        )}
      </div>
      <div className="feed-item-actions">
        <button
          type="button"
          className="feed-item-stat feed-item-stat--button"
          aria-label={isRecipeEntry && likes === 6 ? 'Grow a leaf' : undefined}
          onClick={handleGrowLeafClick}
        >
          <img src={BRANCH_ICON} alt="" /> {likes}
        </button>
        <span className="feed-item-stat">
          <img src={CHAT_ICON} alt="" /> {comments}
        </span>
        <button type="button" className="feed-item-bookmark" aria-label="Save" onClick={(e) => e.stopPropagation()}>
          <img src={BOOKMARK_ICON} alt="" />
        </button>
      </div>
    </article>
  )
}

export default FeedItem
