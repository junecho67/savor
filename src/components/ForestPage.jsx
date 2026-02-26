import './ForestPage.css'

const STATUS_RIGHT = '/savor/wifi top right.png?v=3'
const TREE_MAP_IMAGE = '/savor/Savor Tree Map 1.png'
const LEAF_ICON = '/savor/SavorLeafIcon 2.png'

const TREE_SECTIONS = [
  {
    title: 'Chicken Curry',
    members: [
      { name: 'Grandma', avatar: '/savor/grandma.png' },
      { name: 'Mom', avatar: '/savor/mom.png' },
      { name: 'Cousin Ian', avatar: '/savor/cousinian.png' },
      { name: 'Aunt Sue', avatar: '/savor/auntclara.png' },
    ],
  },
  {
    title: 'Stir Fry Pork Belly',
    members: [
      { name: 'Grandma', avatar: '/savor/grandma.png' },
    ],
  },
  {
    title: 'Kimchi jjigae',
    members: [
      { name: 'Mom', avatar: '/savor/mom.png' },
      { name: 'Dad', avatar: '/savor/dad.png' },
      { name: 'Uncle Jon', avatar: '/savor/unclejon.png' },
    ],
  },
]

function ForestPage() {
  return (
    <section className="forest-page" aria-label="Forest page">
      <div className="forest-page__status">
        <span>10:00 AM</span>
        <img src={STATUS_RIGHT} alt="" />
      </div>
      <div className="forest-page__map-wrap">
        <img src={TREE_MAP_IMAGE} alt="Savor Tree Map" className="forest-page__map" />
      </div>
      <div className="forest-page__sheet">
        <h2 className="forest-page__title">Your Tree</h2>
        <div className="forest-page__sections">
          {TREE_SECTIONS.map((section) => (
            <div key={section.title} className="forest-page__section">
              <div className="forest-page__section-title">
                <img src={LEAF_ICON} alt="" />
                <p>{section.title}</p>
              </div>
              <div className="forest-page__members">
                {section.members.map((member) => (
                  <article key={`${section.title}-${member.name}`} className="forest-page__member-card">
                    <img src={member.avatar} alt="" className="forest-page__member-avatar" />
                    <p>{member.name}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ForestPage
