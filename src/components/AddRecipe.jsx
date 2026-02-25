import './AddRecipe.css'

const imgStatus = 'http://localhost:3845/assets/ba55cde1b25994eb9a947a7394465675848160fe.png'

const iconScan = 'http://localhost:3845/assets/4d8b3837cf81f54456865657161739511ea565fd.svg'
const iconVoice = 'http://localhost:3845/assets/62a6b9897051fc6a96d2f5efb9194dc90c4f8b2b.svg'
const iconCopy = 'http://localhost:3845/assets/62362911ba9de6cb5a140b45256f0801c1686a56.svg'
const iconNotes = 'http://localhost:3845/assets/9f5183a050cd5ee60ef70fffdeca2549d65ec64c.svg'
const iconMusic = 'http://localhost:3845/assets/0440d3800a39081200da669c4a77767391837d0e.svg'

const archive1 = 'http://localhost:3845/assets/05fb808e337b5b999f903ddd9beb5f9a41a198ce.png'
const archive3 = 'http://localhost:3845/assets/bb16a8cf96d38d1f7969c30465b7aa1f6ed6de58.png'

function AddRecipe({ onOpenScan }) {
  return (
    <section className="add-recipe" aria-label="Add Recipe page">
      <div className="add-recipe__status">
        <span>10:00 AM</span>
        <img src={imgStatus} alt="" />
      </div>

      <header className="add-recipe__header">
        <h1>Add Recipe</h1>
        <p>Recipes shared through handwritten notes, copied texts, and conversations through AI.</p>
      </header>

      <div className="add-recipe__grid">
        <button type="button" className="add-recipe__card add-recipe__card-button" onClick={onOpenScan}>
          <img src={iconScan} alt="" className="add-recipe__icon" />
          <h2>Scan</h2>
          <p>Scan handwritten recipes</p>
        </button>

        <article className="add-recipe__card">
          <img src={iconVoice} alt="" className="add-recipe__icon" />
          <h2>Voice</h2>
          <p>Say it out loud</p>
        </article>

        <article className="add-recipe__card">
          <img src={iconCopy} alt="" className="add-recipe__icon add-recipe__icon--copy" />
          <h2>Copy and Paste</h2>
          <p>From anywhere online</p>
        </article>

        <article className="add-recipe__card">
          <img src={iconNotes} alt="" className="add-recipe__icon" />
          <h2>Connect to Notes</h2>
          <p>Import from Notes App</p>
        </article>

        <article className="add-recipe__archives">
          <h2>Archives</h2>
          <p>View your past images, voice memos and more.</p>
          <div className="add-recipe__archive-row">
            <img src={archive1} alt="" className="add-recipe__archive-img" />
            <div className="add-recipe__archive-audio" aria-hidden>
              <img src={iconMusic} alt="" />
            </div>
            <img src={archive3} alt="" className="add-recipe__archive-img" />
          </div>
        </article>
      </div>
    </section>
  )
}

export default AddRecipe
