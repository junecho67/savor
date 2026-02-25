import './ForestPage.css'

const TREE_MAP_IMAGE = '/Users/ycho05/.cursor/projects/Users-ycho05-Desktop-savorlanding/assets/Savor_Tree_Map_1-a5c353a4-de9a-448f-bf60-344884c3653c.png'
const LEAF_ICON = 'http://localhost:3845/assets/af8a7865bebc8aa54be0cce5f05ada34f90d3b47.png'

const TREE_SECTIONS = [
  {
    title: 'Chicken Curry',
    members: [
      { name: 'Grandma', avatar: 'https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=100&auto=format&fit=crop' },
      { name: 'Mom', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop' },
      { name: 'Cousin Ian', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop' },
    ],
  },
]

function ForestPage() {
  return (
    <section className="forest-page" aria-label="Forest page">
      <div className="forest-page__status">
        <span>10:00 AM</span>
        <span className="forest-page__status-dots" aria-hidden><span /><span /><span /></span>
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
