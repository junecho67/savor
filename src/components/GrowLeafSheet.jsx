import { useEffect, useRef, useState } from 'react'
import './GrowLeafSheet.css'

const CAMERA_ICON = 'http://localhost:3845/assets/8c92b8686903773095975d06e2f9b26f9e16d5bd.svg'

function GrowLeafSheet({ open, onClose, onUpload }) {
  const libraryInputRef = useRef(null)
  const cameraInputRef = useRef(null)
  const selectedPhotosRef = useRef([])
  const [selectedPhotos, setSelectedPhotos] = useState([])
  const [isPhotoSourceOpen, setIsPhotoSourceOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return
      if (isPhotoSourceOpen) {
        setIsPhotoSourceOpen(false)
        return
      }
      onClose?.()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose, isPhotoSourceOpen])

  useEffect(() => {
    selectedPhotosRef.current = selectedPhotos
  }, [selectedPhotos])

  useEffect(() => () => {
    selectedPhotosRef.current.forEach((photo) => URL.revokeObjectURL(photo.previewUrl))
  }, [])

  if (!open) return null

  const handleOpenPhotoPicker = () => setIsPhotoSourceOpen(true)
  const handleChooseLibrary = () => { setIsPhotoSourceOpen(false); libraryInputRef.current?.click() }
  const handleChooseCamera = () => { setIsPhotoSourceOpen(false); cameraInputRef.current?.click() }

  const handlePhotoChange = (event) => {
    const files = event.target.files
    if (!files || files.length === 0) return
    const nextPhotos = Array.from(files).map((file) => ({
      id: `${file.name}-${file.lastModified}-${Math.random().toString(36).slice(2, 8)}`,
      previewUrl: URL.createObjectURL(file),
    }))
    setSelectedPhotos((prev) => [...prev, ...nextPhotos])
    event.target.value = ''
  }

  const handleRemovePhoto = (id) => {
    setSelectedPhotos((prev) => {
      const removing = prev.find((p) => p.id === id)
      if (removing) URL.revokeObjectURL(removing.previewUrl)
      return prev.filter((p) => p.id !== id)
    })
  }

  return (
    <div className="grow-leaf-sheet" aria-hidden={!open}>
      <button type="button" className="grow-leaf-sheet__backdrop" aria-label="Close" onClick={onClose} />
      <section className="grow-leaf-sheet__panel" role="dialog" aria-modal="true" aria-label="Grow a leaf">
        <div className="grow-leaf-sheet__handle" aria-hidden />
        <h2>Grow a leaf</h2>
        <label className="grow-leaf-sheet__group">
          <span>Add notes</span>
          <textarea placeholder="Describe your modifications" rows={3} />
        </label>
        <label className="grow-leaf-sheet__group">
          <span>Add photos</span>
          <input ref={libraryInputRef} type="file" accept="image/*" multiple className="grow-leaf-sheet__file-input" onChange={handlePhotoChange} />
          <input ref={cameraInputRef} type="file" accept="image/*" capture="environment" className="grow-leaf-sheet__file-input" onChange={handlePhotoChange} />
          {selectedPhotos.length === 0 ? (
            <button type="button" className="grow-leaf-sheet__photo-field" onClick={handleOpenPhotoPicker}><img src={CAMERA_ICON} alt="" /></button>
          ) : (
            <div className="grow-leaf-sheet__preview-row">
              {selectedPhotos.map((photo) => (
                <div key={photo.id} className="grow-leaf-sheet__preview-item">
                  <img src={photo.previewUrl} alt="" className="grow-leaf-sheet__preview-image" />
                  <button type="button" className="grow-leaf-sheet__preview-remove" onClick={() => handleRemovePhoto(photo.id)}>×</button>
                </div>
              ))}
            </div>
          )}
        </label>
        <button type="button" className="grow-leaf-sheet__upload-button" onClick={onUpload}>Upload</button>
      </section>
      {isPhotoSourceOpen && (
        <div className="grow-leaf-sheet__source-sheet-wrap" role="dialog" aria-modal="true" aria-label="Choose photo source">
          <button type="button" className="grow-leaf-sheet__source-backdrop" onClick={() => setIsPhotoSourceOpen(false)} />
          <div className="grow-leaf-sheet__source-sheet">
            <div className="grow-leaf-sheet__source-group">
              <button type="button" className="grow-leaf-sheet__source-option" onClick={handleChooseCamera}>Take Photo</button>
              <button type="button" className="grow-leaf-sheet__source-option grow-leaf-sheet__source-option--library" onClick={handleChooseLibrary}>Choose from Library</button>
            </div>
            <button type="button" className="grow-leaf-sheet__source-option grow-leaf-sheet__source-option--cancel" onClick={() => setIsPhotoSourceOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default GrowLeafSheet
