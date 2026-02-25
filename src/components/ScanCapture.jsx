import { useRef } from 'react'
import './ScanCapture.css'

const SCAN_BUTTON = 'http://localhost:3845/assets/aaf0fc9e437284e21758657bb05bd7871878f50f.svg'

function ScanCapture() {
  const fileInputRef = useRef(null)
  return (
    <section className="scan-capture" aria-label="Scan recipe">
      <input ref={fileInputRef} type="file" accept="image/*" capture="environment" className="scan-capture__file-input" onChange={() => {}} />
      <button type="button" className="scan-capture__scan-button" aria-label="Scan recipe image" onClick={() => fileInputRef.current?.click()}>
        <img src={SCAN_BUTTON} alt="" />
      </button>
    </section>
  )
}

export default ScanCapture
