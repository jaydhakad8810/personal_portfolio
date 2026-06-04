'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { personalInfo, stats, education } from '@/lib/data'

function Counter({ value, suffix, decimal }: { value: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + increment, value)
      setCount(current)
      if (current >= value) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {decimal ? count.toFixed(2) : Math.floor(count)}{suffix}
    </span>
  )
}

export default function AboutSection() {
  const [activePhoto, setActivePhoto] = useState(0)
  const photos = [
    { src: '/images/hero.jpg', label: 'Professional' },
    { src: '/images/about1.jpg', label: 'Casual' },
    { src: '/images/about2.jpg', label: 'At work' },
  ]

  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Who I Am"
          title="About Me"
          subtitle="A builder at heart — from Nashik to Pune, from Diploma to BTech, from ideas to production."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Photos */}
          <div className="relative">
            {/* Main photo */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden glass rotating-border"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <Image
                src={photos[activePhoto].src}
                alt="Jay Dhakad"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top', transition: 'all 0.4s ease' }}
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(5,5,15,0.7) 0%, transparent 60%)' }} />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-mono text-xs mb-1" style={{ color: '#06b6d4' }}>
                  jay_dhakad / {photos[activePhoto].label.toLowerCase()}
                </p>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-3 mt-4">
              {photos.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  className={`relative h-20 flex-1 rounded-xl overflow-hidden transition-all duration-200 ${
                    activePhoto === i ? 'ring-2' : 'opacity-50 hover:opacity-75'
                  }`}
                  style={{ ringColor: '#06b6d4', outline: activePhoto === i ? '2px solid #06b6d4' : 'none' }}
                >
                  <Image src={p.src} alt={p.label} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                </button>
              ))}
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-8">
            {/* Bio */}
            <div>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#94a3b8' }}>
                {personalInfo.bio}
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#64748b' }}>
                I don&apos;t just build for assignments — DGSystem is a live production system powering a real business in Nashik.
                CYBRIX AI handles real cybersecurity queries. Every project I ship, I ship for real.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-5" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="font-bold text-3xl mb-1 gradient-text" style={{ fontFamily: 'Syne, sans-serif' }}>
                    <Counter value={s.value} suffix={s.suffix} decimal={s.decimal} />
                  </p>
                  <p className="font-mono text-xs" style={{ color: '#475569' }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div>
              <p className="font-mono text-xs tracking-widest mb-3" style={{ color: '#475569', letterSpacing: '0.15em' }}>
                LANGUAGES
              </p>
              <div className="flex flex-wrap gap-2">
                {personalInfo.languages.map((lang) => (
                  <span key={lang} className="tech-tag">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Fun facts */}
            <div>
              <p className="font-mono text-xs tracking-widest mb-3" style={{ color: '#475569', letterSpacing: '0.15em' }}>
                FUN FACTS
              </p>
              <div className="flex flex-col gap-2">
                {personalInfo.funFacts.map((fact, i) => (
                  <p key={i} className="text-sm" style={{ color: '#64748b' }}>{fact}</p>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <p className="font-mono text-xs tracking-widest mb-3" style={{ color: '#475569', letterSpacing: '0.15em' }}>
                EDUCATION
              </p>
              <div className="flex flex-col gap-3">
                {education.map((e, i) => (
                  <div key={i} className="glass rounded-xl p-4" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-sm mb-0.5" style={{ fontFamily: 'Syne, sans-serif' }}>
                          {e.degree}
                        </p>
                        <p className="font-mono text-xs" style={{ color: '#06b6d4' }}>{e.institution}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-mono text-xs" style={{ color: '#475569' }}>{e.period}</p>
                        {e.cgpa && (
                          <p className="font-bold text-sm gradient-text">{e.cgpa}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
