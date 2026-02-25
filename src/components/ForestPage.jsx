import './ForestPage.css'

const STATUS_RIGHT = 'http://localhost:3845/assets/ba55cde1b25994eb9a947a7394465675848160fe.png'
const TREE_MAP_IMAGE = 'http://localhost:3845/assets/395e5e9985dddc6e46ea2d38f862fbe261baf4ce.png'
const LEAF_ICON = 'http://localhost:3845/assets/af8a7865bebc8aa54be0cce5f05ada34f90d3b47.png'

const TREE_SECTIONS = [
  {
    title: 'Chicken Curry',
    members: [
      { name: 'Grandma', avatar: 'http://localhost:3845/assets/b6beaffbf80d98602c1e345bb8e77d18fa1c8530.png' },
      { name: 'Mom', avatar: 'http://localhost:3845/assets/de328d1d26cc9e14ceba885a5e9d25cc84861523.png' },
      { name: 'Cousin Ian', avatar: 'http://localhost:3845/assets/ccfa7cb9160116512a83c2308aa9c3ee27295503.png' },
      { name: 'Aunt Sue', avatar: 'http://localhost:3845/assets/074c7df340e0721903d926425a6a68fdb7f3aff2.png' },
    ],
  },
  {
    title: 'Stir Fry Pork Belly',
    members: [
      { name: 'Grandma', avatar: 'http://localhost:3845/assets/b6beaffbf80d98602c1e345bb8e77d18fa1c8530.png' },
    ],
  },
  {
    title: 'Kimchi jjigae',
    members: [
      { name: 'Mom', avatar: 'http://localhost:3845/assets/de328d1d26cc9e14ceba885a5e9d25cc84861523.png' },
      { name: 'Dad', avatar: 'http://localhost:3845/assets/baa1cbcbe2250c59af27a3ee93eec66927ac19e8.png' },
      { name: 'Uncle Jon', avatar: 'http://localhost:3845/assets/67d36e696ad280668c5589c67828f07cb4611be0.png' },
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
