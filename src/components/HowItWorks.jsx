import React from 'react'
import { Sparkles, Zap, Share2 } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: <Zap size={20} />, title: 'Upload', desc: 'Drop a face photo — selfies work great.' },
    { icon: <Sparkles size={20} />, title: 'Style', desc: 'Pick an effect: neon, cyber, film grain, or portrait glow.' },
    { icon: <Share2 size={20} />, title: 'Snap', desc: 'Download or share your AI-enhanced snap.' },
  ]

  return (
    <section id="how-it-works" className="relative py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white">How it works</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-1 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
