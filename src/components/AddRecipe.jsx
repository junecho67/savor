import './AddRecipe.css'

const imgStatus = '/savor/wifi top right.png?v=3'

const iconScan = '/savor/famicons_scan.svg'
const iconVoice = '/savor/Microphone.svg'
const iconCopy = '/savor/Group.svg'
const iconNotes = '/savor/Frame 70.svg'
const archive1 = '/savor/Image Full-Width.png'
const archive2 = '/savor/Image Full-Width-1.png'
const archive3 = '/savor/Image Full-Width-2.png'

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
            <img src={archive2} alt="" className="add-recipe__archive-img" />
            <img src={archive3} alt="" className="add-recipe__archive-img" />
          </div>
        </article>
      </div>
    </section>
  )
}

export default AddRecipe
