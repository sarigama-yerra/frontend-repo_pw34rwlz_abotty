import React, { useRef, useState } from 'react'
import { Upload, ImageIcon, Sparkles } from 'lucide-react'

export default function Uploader({ onImageSelected }) {
  const inputRef = useRef(null)
  const [preview, setPreview] = useState(null)

  const onDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith('image/')) {
      handleFile(file)
    }
  }

  const handleFile = (file) => {
    const url = URL.createObjectURL(file)
    setPreview(url)
    onImageSelected?.(file)
  }

  const onChange = (e) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) handleFile(file)
  }

  return (
    <section id="uploader" className="relative py-14">
      <div className="mx-auto max-w-4xl px-6">
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg text-center text-white/80"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500/80 shadow-lg">
            <Upload className="text-white" size={24} />
          </div>
          <h3 className="text-2xl font-semibold text-white">Upload a face photo</h3>
          <p className="mt-1 text-sm text-white/70">Drag and drop an image here, or click to browse</p>

          <button
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 font-medium text-slate-900 shadow hover:-translate-y-0.5 transition"
            onClick={() => inputRef.current?.click()}
          >
            <ImageIcon size={18} /> Choose image
          </button>
          <input ref={inputRef} type="file" accept="image/*" onChange={onChange} className="hidden" />

          {preview && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img src={preview} alt="preview" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 flex items-center justify-center">
                <div className="text-center p-6">
                  <Sparkles className="mx-auto text-fuchsia-400" />
                  <p className="mt-3 text-white/90">Effects will appear here once applied.</p>
                  <p className="text-xs text-white/60">This demo shows the flow. Connect a backend model to generate real effects.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
