import { useEffect, useMemo, useState } from 'react'
import './RecipeViewSheet.css'

const INGREDIENTS = [
  { name: 'Chicken Thighs', amount: 400, unit: 'g', type: 'single' },
  { name: 'Onions', amount: 0.5, unit: 'medium sliced', type: 'single', fraction: true },
  { name: 'Potato', amount: 0.5, unit: 'medium sliced', type: 'single', fraction: true },
  { name: 'Garlic', amount: 2, unit: 'cloves', type: 'single' },
  { name: 'Chicken Stock', amount: 2, unit: 'cups', type: 'single' },
  { name: 'Curry Roux', min: 90, max: 100, unit: 'g', type: 'range' },
  { name: 'Salt', amount: 0.5, unit: 'tsp', type: 'single', fraction: true },
  { name: 'Black Pepper', amount: 0.25, unit: 'tsp', type: 'single', fraction: true },
]

const STEPS = [
  'cut the chicken, slice the onion, and cut the potato and carrot into chunks.',
  'heat oil in a pot over medium heat. add the onion and cook slowly until soft and lightly golden.',
  'add garlic and cook until fragrant. add the chicken and cook until the outside is no longer pink.',
]

function toFractionString(value) {
  const rounded = Math.round(value * 8) / 8
  const whole = Math.floor(rounded)
  const fraction = rounded - whole
  const map = { 0: '', 0.125: '1/8', 0.25: '1/4', 0.375: '3/8', 0.5: '1/2', 0.625: '5/8', 0.75: '3/4', 0.875: '7/8' }
  const fractionText = map[Number(fraction.toFixed(3))] || ''
  if (!fractionText) return String(whole)
  if (whole === 0) return fractionText
  return `${whole} ${fractionText}`
}

function buildIngredientText(ingredient, multiplier) {
  if (ingredient.type === 'range') {
    const min = Math.round(ingredient.min * multiplier)
    const max = Math.round(ingredient.max * multiplier)
    return `${min}-${max}${ingredient.unit}`
  }
  const scaled = ingredient.amount * multiplier
  const amountText = ingredient.fraction ? toFractionString(scaled) : String(Math.round(scaled * 100) / 100)
  return `${amountText} ${ingredient.unit}`
}

function RecipeViewSheet({ open, onClose }) {
  const [servings, setServings] = useState(2)

  useEffect(() => {
    if (!open) return undefined
    const onEsc = (e) => e.key === 'Escape' && onClose?.()
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [open, onClose])

  const multiplier = servings / 2
  const computedIngredients = useMemo(
    () => INGREDIENTS.map((ingredient) => ({ ...ingredient, value: buildIngredientText(ingredient, multiplier) })),
    [multiplier],
  )

  if (!open) return null
  return (
    <div className="recipe-view-sheet" aria-hidden={!open}>
      <button type="button" className="recipe-view-sheet__backdrop" onClick={onClose} />
      <section className="recipe-view-sheet__panel" role="dialog" aria-modal="true">
        <div className="recipe-view-sheet__handle" aria-hidden />
        <h2>Recipe</h2>
        <article className="recipe-view-sheet__card">
          <header className="recipe-view-sheet__card-header">
            <div className="recipe-view-sheet__tag recipe-view-sheet__tag--green">Ingredients</div>
            <div className="recipe-view-sheet__servings">
              <button type="button" className="recipe-view-sheet__servings-button" onClick={() => setServings((p) => Math.max(1, p - 1))} disabled={servings <= 1}>-</button>
              <span>{servings} servings</span>
              <button type="button" className="recipe-view-sheet__servings-button" onClick={() => setServings((p) => p + 1)}>+</button>
            </div>
          </header>
          <div className="recipe-view-sheet__ingredients">
            {computedIngredients.map((ingredient) => (
              <div key={ingredient.name} className="recipe-view-sheet__row">
                <p>{ingredient.name}</p>
                <p>{ingredient.value}</p>
              </div>
            ))}
          </div>
        </article>
        <article className="recipe-view-sheet__card">
          <header className="recipe-view-sheet__card-header recipe-view-sheet__card-header--single">
            <div className="recipe-view-sheet__tag recipe-view-sheet__tag--orange">Instructions</div>
          </header>
          <div className="recipe-view-sheet__instructions">
            {STEPS.map((step, index) => (
              <div key={step} className="recipe-view-sheet__step">
                <p className="recipe-view-sheet__step-number">{index + 1}.</p>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}

export default RecipeViewSheet
