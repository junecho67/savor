import FeedItem from './FeedItem'
import './FeedSection.css'

const FEED_ITEMS = [
  {
    id: '1',
    avatar: 'http://localhost:3845/assets/75aa1276383e620529afcb286952385adda4ca3b.png',
    actor: 'Cho family',
    verb: 'made',
    title: 'chicken curry',
    time: '1 day ago',
    image: 'http://localhost:3845/assets/8a3c69e9511f3c3c8451cf97e00c02fb2436fb5b.png',
    likes: 6,
    comments: 3,
  },
  {
    id: '2',
    avatar: 'http://localhost:3845/assets/a37a856e9e341dfa08cfad7943d85320ac3c4aef.png',
    actor: 'Hong family',
    verb: 'cooked',
    title: 'butter pasta',
    time: '1 day ago',
    images: [
      'http://localhost:3845/assets/9593145b9752fe3eda37994b0fd256c23baab042.png',
      'http://localhost:3845/assets/17c2d2f8c4d3e47984e88f52f63ca5c35e9daa9c.png',
    ],
    likes: 6,
    comments: 3,
  },
  {
    id: '3',
    avatar: 'http://localhost:3845/assets/fcfee7940207fc0fe2d7d4d7c0a8775e47a35372.png',
    actor: 'Jang family',
    verb: 'baked an',
    title: 'apple pie',
    time: '2 days ago',
    image: 'http://localhost:3845/assets/33941f12a4cfecf3956c3a5d368c416b1e49ac15.png',
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
