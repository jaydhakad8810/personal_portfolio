'use client'
import { personalInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t py-10" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #7c3aed)', color: '#fff', fontFamily: 'Syne, sans-serif' }}
          >
            JD
          </div>
          <p className="font-mono text-xs" style={{ color: '#334155' }}>
            Jay Dhakad · MIT ADT University · Batch 2027
          </p>
        </div>
        <p className="font-mono text-xs" style={{ color: '#1e293b' }}>
          Built with Next.js · Tailwind · Framer Motion
        </p>
        <div className="flex items-center gap-4">
          <a href={personalInfo.github} target="_blank" rel="noreferrer"
            className="font-mono text-xs transition-colors" style={{ color: '#334155' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#06b6d4' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#334155' }}>
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
            className="font-mono text-xs transition-colors" style={{ color: '#334155' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#a78bfa' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#334155' }}>
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`}
            className="font-mono text-xs transition-colors" style={{ color: '#334155' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#06b6d4' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#334155' }}>
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
