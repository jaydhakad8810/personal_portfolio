'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { experience } from '@/lib/data'

function ExperienceCard({ exp, index }: { exp: typeof experience[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} mb-12`}>
      {/* Timeline dot */}
      <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10">
        <div className="w-4 h-4 rounded-full border-2 animate-pulse"
          style={{
            background: exp.color === 'cyan' ? '#06b6d4' : '#7c3aed',
            borderColor: exp.color === 'cyan' ? '#06b6d4' : '#7c3aed',
            boxShadow: `0 0 20px ${exp.color === 'cyan' ? 'rgba(6,182,212,0.5)' : 'rgba(124,58,237,0.5)'}`,
          }} />
      </div>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-[calc(50%-40px)] glass rounded-2xl p-6"
        style={{ border: `1px solid ${exp.color === 'cyan' ? 'rgba(6,182,212,0.2)' : 'rgba(124,58,237,0.2)'}` }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span
              className="font-mono text-xs px-3 py-1 rounded-full mb-3 inline-block"
              style={{
                background: exp.color === 'cyan' ? 'rgba(6,182,212,0.1)' : 'rgba(124,58,237,0.1)',
                color: exp.color === 'cyan' ? '#06b6d4' : '#a78bfa',
                border: `1px solid ${exp.color === 'cyan' ? 'rgba(6,182,212,0.2)' : 'rgba(124,58,237,0.2)'}`,
              }}
            >
              {exp.type}
            </span>
            <h3 className="font-bold text-lg leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              {exp.role}
            </h3>
            <p className="font-medium text-sm mt-1" style={{ color: exp.color === 'cyan' ? '#06b6d4' : '#a78bfa' }}>
              {exp.company}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs" style={{ color: '#475569' }}>📍 {exp.location}</span>
          <span className="font-mono text-xs" style={{ color: '#334155' }}>·</span>
          <span className="font-mono text-xs" style={{ color: '#475569' }}>{exp.period}</span>
        </div>

        <ul className="flex flex-col gap-2">
          {exp.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#64748b', lineHeight: 1.6 }}>
              <span className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                style={{ background: exp.color === 'cyan' ? '#06b6d4' : '#7c3aed' }} />
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Where I've Worked"
          title="Experience"
          subtitle="Real internships, real clients, real deliverables."
        />

        <div className="relative">
          {/* Center line */}
          <div className="timeline-line hidden md:block" />

          {/* Cards */}
          <div className="md:block">
            {experience.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>

          {/* Mobile cards */}
          <div className="flex flex-col gap-6 md:hidden">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6"
                style={{ border: `1px solid ${exp.color === 'cyan' ? 'rgba(6,182,212,0.2)' : 'rgba(124,58,237,0.2)'}` }}
              >
                <span
                  className="font-mono text-xs px-3 py-1 rounded-full mb-3 inline-block"
                  style={{
                    background: exp.color === 'cyan' ? 'rgba(6,182,212,0.1)' : 'rgba(124,58,237,0.1)',
                    color: exp.color === 'cyan' ? '#06b6d4' : '#a78bfa',
                  }}
                >
                  {exp.type}
                </span>
                <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{exp.role}</h3>
                <p className="text-sm mb-1" style={{ color: exp.color === 'cyan' ? '#06b6d4' : '#a78bfa' }}>{exp.company}</p>
                <p className="font-mono text-xs mb-4" style={{ color: '#475569' }}>{exp.location} · {exp.period}</p>
                <ul className="flex flex-col gap-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: '#64748b' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                        style={{ background: exp.color === 'cyan' ? '#06b6d4' : '#7c3aed' }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
