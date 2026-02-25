import './FeedItem.css'

function FeedItem({ avatar, title, time, image, images, likes, comments }) {
  const isMulti = Array.isArray(images) && images.length > 0

  return (
    <article className="feed-item">
      <div className="feed-item-header">
        <img src={avatar} alt="" className="feed-item-avatar" />
        <div className="feed-item-meta">
          <p className="feed-item-title">{title}</p>
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
          <LeafIcon /> {likes}
        </span>
        <span className="feed-item-stat">
          <CommentIcon /> {comments}
        </span>
        <button type="button" className="feed-item-bookmark" aria-label="Save">
          <BookmarkIcon />
        </button>
      </div>
    </article>
  )
}

function LeafIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3C7 8 5 14 5 20c4-2 8-2 12 0 0-6-2-12-7-17-1 0-2 0-3 0z" />
    </svg>
  )
}

function CommentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function BookmarkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}

export default FeedItem
