import { useEffect } from 'react'
import './GrowLeafSuccessModal.css'

const LEAF_IMAGE = 'http://localhost:3845/assets/af8a7865bebc8aa54be0cce5f05ada34f90d3b47.png'

function GrowLeafSuccessModal({ open, onClose, onViewForest }) {
  useEffect(() => {
    if (!open) return undefined
    const onEsc = (e) => e.key === 'Escape' && onClose?.()
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="grow-leaf-success" aria-hidden={!open}>
      <button type="button" className="grow-leaf-success__backdrop" onClick={onClose} />
      <section className="grow-leaf-success__card" role="dialog" aria-modal="true">
        <button type="button" className="grow-leaf-success__close" onClick={onClose}>×</button>
        <h2>Congratulations you grew a leaf!</h2>
        <div className="grow-leaf-success__leaf-wrap"><img src={LEAF_IMAGE} alt="" className="grow-leaf-success__leaf" /></div>
        <button type="button" className="grow-leaf-success__cta" onClick={onViewForest}>View Forest</button>
      </section>
    </div>
  )
}

export default GrowLeafSuccessModal
