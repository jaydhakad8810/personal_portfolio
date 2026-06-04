'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import { achievements } from '@/lib/data'

export default function AchievementsSection() {
  return (
    <SectionWrapper id="achievements">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Recognition"
          title="Hackathons & Achievements"
          subtitle="Competing, winning, and getting recognized on national and international stages."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass rounded-3xl p-8 text-center relative overflow-hidden group"
              style={{
                border: `1px solid ${a.color === 'cyan' ? 'rgba(6,182,212,0.2)' : 'rgba(124,58,237,0.2)'}`,
              }}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${a.color === 'cyan' ? 'rgba(6,182,212,0.06)' : 'rgba(124,58,237,0.06)'} 0%, transparent 70%)`,
                }}
              />

              {/* Year badge */}
              <div className="absolute top-5 right-5">
                <span className="font-mono text-xs" style={{ color: '#334155' }}>{a.year}</span>
              </div>

              {/* Icon */}
              <div className="text-5xl mb-6">{a.icon}</div>

              {/* Title */}
              <p
                className="font-bold text-2xl mb-1 gradient-text"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {a.title}
              </p>

              {/* Event */}
              <p className="font-semibold text-base mb-2" style={{ color: a.color === 'cyan' ? '#22d3ee' : '#a78bfa' }}>
                {a.event}
              </p>

              {/* Location */}
              <p className="font-mono text-xs mb-5" style={{ color: '#475569' }}>{a.location}</p>

              {/* Divider */}
              <div className="w-12 h-px mx-auto mb-5"
                style={{ background: `linear-gradient(90deg, transparent, ${a.color === 'cyan' ? '#06b6d4' : '#7c3aed'}, transparent)` }} />

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* International callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 glass rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6"
          style={{ border: '1px solid rgba(6,182,212,0.2)', background: 'rgba(6,182,212,0.02)' }}
        >
          <div className="text-5xl shrink-0">🌍</div>
          <div>
            <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
              International Recognition
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
              Competed at the{' '}
              <span style={{ color: '#22d3ee' }}>Linux OSCI International Hackathon in the Netherlands</span>{' '}
              — contributing to the Lomiri desktop shell and Ubuntu Touch environment. Went up against
              developers from across the world and placed Runner-Up.
            </p>
          </div>
          <div className="shrink-0">
            <span className="font-mono text-4xl font-bold gradient-text" style={{ fontFamily: 'Syne, sans-serif' }}>
              🥈
            </span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
