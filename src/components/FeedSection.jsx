import FeedItem from './FeedItem'
import './FeedSection.css'

const FEED_ITEMS = [
  {
    id: '1',
    avatar: 'https://images.unsplash.com/photo-1529156069898-49953e7b2a2a?w=80&h=80&fit=crop',
    title: 'Cho family made chicken curry',
    time: '1 day ago',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80',
    likes: 6,
    comments: 3,
  },
  {
    id: '2',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop',
    title: 'Family dinner night',
    time: '1 day ago',
    images: [
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&q=80',
      'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&q=80',
    ],
    likes: 6,
    comments: 3,
  },
  {
    id: '3',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
    title: 'Jang family baked an apple pie',
    time: '2 days ago',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80',
    likes: 6,
    comments: 7,
  },
]

function FeedSection() {
  return (
    <section className="feed-section" aria-labelledby="feed-title">
      <h2 id="feed-title" className="feed-title">Your Family & Friends</h2>
      <ul className="feed-list">
        {FEED_ITEMS.map((item) => (
          <li key={item.id}>
            <FeedItem {...item} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FeedSection
