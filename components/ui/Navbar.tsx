'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`mx-auto max-w-6xl px-6 flex items-center justify-between rounded-2xl transition-all duration-300 ${
            scrolled ? 'glass py-3 mx-4 md:mx-auto' : ''
          }`}
        >
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-mono"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #7c3aed)', color: '#fff' }}>
              JD
            </div>
            <span className="font-display font-semibold text-sm tracking-wide hidden sm:block"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              jay<span className="gradient-text">dhakad</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
            <a
              href="mailto:jaydhakad92@gmail.com"
              className="text-xs font-mono px-4 py-2 rounded-lg border transition-all duration-200"
              style={{
                borderColor: 'rgba(6,182,212,0.4)',
                color: '#06b6d4',
                background: 'rgba(6,182,212,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(6,182,212,0.12)'
                e.currentTarget.style.borderColor = 'rgba(6,182,212,0.7)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(6,182,212,0.06)'
                e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)'
              }}
            >
              Hire me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-violet-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 glass rounded-2xl p-6 md:hidden"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-sm text-slate-300 hover:text-cyan-400 transition-colors py-2 border-b border-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:jaydhakad92@gmail.com"
                className="text-center text-sm font-mono py-2.5 rounded-lg"
                style={{ background: 'linear-gradient(135deg, #06b6d4, #7c3aed)', color: '#fff' }}
              >
                Hire me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
