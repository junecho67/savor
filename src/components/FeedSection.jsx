import FeedItem from './FeedItem'
import './FeedSection.css'

const FEED_ITEMS = [
  {
    id: '1',
    avatar: '/savor/chofamilymadechickencurry.png',
    actor: 'Cho family',
    verb: 'made',
    title: 'chicken curry',
    time: '1 day ago',
    image: '/savor/cho curry.jpg',
    likes: 6,
    comments: 3,
  },
  {
    id: '2',
    avatar: '/savor/hong family.png',
    actor: 'Hong family',
    verb: 'cooked',
    title: 'butter pasta',
    time: '1 day ago',
    images: [
      '/savor/butterpasta.png',
      '/savor/butter.png',
    ],
    likes: 6,
    comments: 3,
  },
  {
    id: '3',
    avatar: '/savor/jangfamily.png',
    actor: 'Jang family',
    verb: 'baked an',
    title: 'apple pie',
    time: '2 days ago',
    image: '/savor/Lattice_apple_pie.png',
    likes: 6,
    comments: 7,
  },
]

function FeedSection({ onSelectRecipe, onOpenGrowLeaf }) {
  return (
    <section className="feed-section" aria-labelledby="feed-title">
      <h2 id="feed-title" className="feed-title">Your Family & Friends</h2>
      <ul className="feed-list">
        {FEED_ITEMS.map((item) => (
          <li key={item.id}>
            <FeedItem {...item} onSelectRecipe={onSelectRecipe} onOpenGrowLeaf={onOpenGrowLeaf} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FeedSection
