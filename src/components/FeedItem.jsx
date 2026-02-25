import './FeedItem.css'

const BRANCH_ICON = 'http://localhost:3845/assets/bca50743e960708810e3bbfafc580ee3181f5c27.svg'
const CHAT_ICON = 'http://localhost:3845/assets/b5f1ef92e6c9345b8327cf72f77557bdf21a5965.svg'
const BOOKMARK_ICON = 'http://localhost:3845/assets/6706e034eb4cd22bf16fc919ef81e69d672589c5.svg'

function FeedItem({ avatar, actor, verb, title, time, image, images, likes, comments }) {
  const isMulti = Array.isArray(images) && images.length > 0

  return (
    <article className="feed-item">
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
        <span className="feed-item-stat">
          <img src={BRANCH_ICON} alt="" /> {likes}
        </span>
        <span className="feed-item-stat">
          <img src={CHAT_ICON} alt="" /> {comments}
        </span>
        <button type="button" className="feed-item-bookmark" aria-label="Save">
          <img src={BOOKMARK_ICON} alt="" />
        </button>
      </div>
    </article>
  )
}

export default FeedItem
