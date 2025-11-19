import React, { useState } from 'react'
import Hero from './components/Hero'
import Uploader from './components/Uploader'
import HowItWorks from './components/HowItWorks'

function App() {
  const [started, setStarted] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950">
      {/* top nav */}
      <header className="fixed left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
            <span className="text-white font-semibold">Face Snap AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#uploader" className="hover:text-white transition">Upload</a>
            <a href="#how-it-works" className="hover:text-white transition">How it works</a>
            <a href="#" className="rounded-lg bg-white/10 px-3 py-1.5 text-white hover:bg-white/20 transition">Try demo</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <Hero onGetStarted={() => setStarted(true)} />
        <div className="relative z-10 -mt-24 md:-mt-36">
          <Uploader onImageSelected={() => {}} />
          <HowItWorks />
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-white/70">
        Made with ❤️ by your AI builder
      </footer>
    </div>
  )
}

export default App
