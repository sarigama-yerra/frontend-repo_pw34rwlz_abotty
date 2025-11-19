import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* Spline 3D animation background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient soft overlay to blend with text (no pointer blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
          AI Face Snapper • Instant effects
        </div>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Face Snap AI
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-200/90">
          Upload a photo and create stunning, stylized snaps in seconds. Simple. Fast. Playful.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={onGetStarted} className="rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 hover:-translate-y-0.5 transition">
            Get started
          </button>
          <a href="#how-it-works" className="text-white/80 hover:text-white transition">How it works</a>
        </div>
      </div>
    </section>
  )
}
