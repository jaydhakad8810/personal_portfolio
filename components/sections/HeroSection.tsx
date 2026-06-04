'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import { personalInfo } from '@/lib/data'

const sequence = personalInfo.typingRoles.flatMap((role) => [role, 2000])

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle canvas bg layer (purely decorative CSS-based) */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              background: i % 2 === 0 ? '#06b6d4' : '#7c3aed',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
              animation: `float ${Math.random() * 8 + 6}s ease-in-out ${Math.random() * 4}s infinite alternate`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
          {/* Left — Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 glass"
              style={{ border: '1px solid rgba(6,182,212,0.3)' }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs tracking-wider" style={{ color: '#94a3b8' }}>
                Available for internships & freelance
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-bold leading-none mb-4"
              style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(3rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
            >
              Jay
              <br />
              <span className="gradient-text">Dhakad</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 mb-6 h-10"
            >
              <span className="font-mono text-sm" style={{ color: '#475569' }}>~/</span>
              <span className="font-mono text-lg font-medium" style={{ color: '#06b6d4' }}>
                <TypeAnimation
                  sequence={sequence as any}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg md:text-xl mb-8 leading-relaxed max-w-md"
              style={{ color: '#94a3b8' }}
            >
              I Build Things That Work{' '}
              <span style={{ color: '#f0f4ff' }}>in the Real World</span>.
              <br />
              Full-stack. Cybersecurity. Android. Production-deployed.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #06b6d4, #7c3aed)',
                  color: '#fff',
                  boxShadow: '0 0 30px rgba(6,182,212,0.25)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 40px rgba(6,182,212,0.45)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 30px rgba(6,182,212,0.25)' }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-medium text-sm glass transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#f0f4ff' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
              >
                Contact Me →
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="flex items-center gap-5"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs tracking-wider flex items-center gap-2 transition-colors"
                style={{ color: '#475569' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#06b6d4' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#475569' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <span style={{ color: '#1e293b' }}>·</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs tracking-wider flex items-center gap-2 transition-colors"
                style={{ color: '#475569' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#a78bfa' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#475569' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <span style={{ color: '#1e293b' }}>·</span>
              <span className="font-mono text-xs" style={{ color: '#475569' }}>
                Pune, India
              </span>
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating border ring */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-60"
                style={{
                  background: 'conic-gradient(from 0deg, #06b6d4, #7c3aed, #06b6d4)',
                  animation: 'rotateBorder 6s linear infinite',
                  filter: 'blur(2px)',
                }}
              />
              {/* Photo */}
              <div className="relative w-72 h-96 md:w-80 md:h-[440px] rounded-3xl overflow-hidden glass">
                <Image
                  src="/images/hero.jpg"
                  alt="Jay Dhakad"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  priority
                />
                {/* Bottom glass overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-5"
                  style={{
                    background: 'linear-gradient(to top, rgba(5,5,15,0.9) 0%, transparent 100%)',
                  }}
                >
                  <p className="font-mono text-xs mb-1" style={{ color: '#06b6d4' }}>
                    @ MIT ADT University
                  </p>
                  <p className="font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
                    BTech IT · Batch 2027
                  </p>
                </div>
              </div>

              {/* Floating badge — CGPA */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-10 top-12 glass px-4 py-3 rounded-2xl"
                style={{ border: '1px solid rgba(6,182,212,0.25)' }}
              >
                <p className="font-mono text-xs mb-0.5" style={{ color: '#94a3b8' }}>CGPA</p>
                <p className="font-bold text-xl gradient-text" style={{ fontFamily: 'Syne, sans-serif' }}>8.40</p>
              </motion.div>

              {/* Floating badge — Hackathon */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-8 bottom-20 glass px-4 py-3 rounded-2xl"
                style={{ border: '1px solid rgba(124,58,237,0.25)' }}
              >
                <p className="font-mono text-xs mb-0.5" style={{ color: '#94a3b8' }}>🏆 Hackathons</p>
                <p className="font-bold text-xl" style={{ fontFamily: 'Syne, sans-serif', color: '#a78bfa' }}>2 Wins</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs" style={{ color: '#334155' }}>scroll</span>
          <div className="w-px h-12 relative overflow-hidden" style={{ background: '#1e293b' }}>
            <motion.div
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-x-0 h-1/2"
              style={{ background: 'linear-gradient(to bottom, #06b6d4, #7c3aed)' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
